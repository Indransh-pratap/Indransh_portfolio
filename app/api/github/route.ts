import { Octokit } from "octokit";
import { NextResponse, NextRequest } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const octokit = GITHUB_TOKEN ? new Octokit({ auth: GITHUB_TOKEN }) : null;

export async function GET(request: NextRequest) {
  if (!octokit) {
    console.error("GITHUB_TOKEN is missing");
    return NextResponse.json(
      { error: "GitHub service not configured" },
      { status: 500 }
    );
  }
  const { searchParams } = new URL(request.url);

  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json(
      { error: "Username is Required" },
      { status: 400 }
    );
  }

  try {
    const query = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `;

    const response = await octokit.graphql(query, { username });
    //   @ts-expect-error
    const calendar = response.user.contributionsCollection.contributionCalendar;

    //   Flatten the weeks array to get all contribution days

    // @ts-expect-error
    const contributions = calendar.weeks.flatMap((week) =>
      // @ts-expect-error
      week.contributionDays.map((day) => ({
        count: day.contributionCount,
        date: day.date,
      }))
    );

    return NextResponse.json({
        user:{
            totalContribution:calendar.totalContributions
        },
        contributions
    })
  } catch (error) {
    console.error("GITHUB API ERROR" , error)
    return NextResponse.json(
        {error:"Failed to fetch github Data"},
        {status:500}
    )
  }
}
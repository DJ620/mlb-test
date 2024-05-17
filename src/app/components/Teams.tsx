"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import League from "./League";

export default function Teams() {
  const [sortedLeagues, setSortedLeagues] = useState<any>({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(
      "https://statsapi.mlb.com/api/v1/teams?season=2023&sportId=1"
    );
    let leagues: any = {};
    data.teams.forEach((team: any) => {
      let leagueName = team.league.name;
      leagues[leagueName] = leagues[leagueName] || [];
      leagues[leagueName].push(team);
    });
    console.log({ leagues });
    setSortedLeagues(leagues);
  };
  return (
    <div>
      <h1 className="text-4xl">MLB Teams</h1>
      <div className="flex gap-20">
        {Object.keys(sortedLeagues).length > 0 &&
          Object.keys(sortedLeagues).map((league: any) => {
            return (
              <div key={sortedLeagues.league}>
                <League
                  leagueName={league}
                  teams={sortedLeagues[league]}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

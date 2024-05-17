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
    const leagues: any = {};
    data.teams.forEach((team: any) => {
      const leagueName = team.league.name;
      leagues[leagueName] = leagues[leagueName] || [];
      leagues[leagueName].push(team);
    });
    setSortedLeagues(leagues);
  };
  return (
    <div className=" text-center">
      <h1 className="text-6xl mb-5">MLB Teams</h1>
      <div className="flex gap-20 justify-center">
        {Object.keys(sortedLeagues).length > 0 &&
          Object.keys(sortedLeagues).map((league: any) => {
            return (
              <div key={league}>
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

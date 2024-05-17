"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Teams() {
  const [teamsData, setTeamsData] = useState<any>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(
      "https://statsapi.mlb.com/api/v1/teams?season=2023&sportId=1"
    );
    setTeamsData(data.teams);
    console.log(data.teams);
  };
  return (
    <div>
      <h1>MLB Teams</h1>
      <div>
        {teamsData.length > 0 &&
          teamsData.map((team: any) => {
            return (
              <div key={team.id}>
                <Link href={""}>{team.name} - {team.league.name} - {team.division.name}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

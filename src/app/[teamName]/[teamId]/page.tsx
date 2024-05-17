"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Roster({
  params,
}: {
  params: { teamName: string; teamId: number };
}) {
  const [roster, setRoster] = useState<any>([]);
  const [team, setTeam] = useState<string>("");

  useEffect(() => {
    getRoster();
    setTeam(params.teamName.replace(/%20/g, " "));
  }, []);

  const getRoster = async () => {
    const { data } = await axios.get(
      `https://statsapi.mlb.com/api/v1/teams/${params.teamId}/roster?rosterType=active`
    );
    setRoster(data.roster);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl">{team}</h1>
      <div>
        {roster.length > 0 &&
          roster.map((player: any) => {
            return (
              <div key={player.person.id} className="mt-2 border-t pt-2">
                <p>{player.person.fullName} (No. {player.jerseyNumber}) - {player.position.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

import React from "react";

type props = {
  leagueName: string;
  teams: any;
};

export default function League({ leagueName, teams }: props) {
  return (
    <div>
      <h3 className="text-2xl">{leagueName}</h3>
      {teams?.length > 0 &&
        teams.map((team: any) => {
          return <p key={team.id}>{team.name}</p>;
        })}
    </div>
  );
}

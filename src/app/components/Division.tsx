import React from "react";

type props = {
  divisionName: string;
  teams: any;
};

export default function Division({ divisionName, teams }: props) {
  return (
    <div>
      <h4 className="text-xl mb-1">{divisionName}</h4>
      <div>
        {teams.length > 0 &&
          teams.map((team: any) => {
            return <p key={team.id}>{team.name}</p>;
          })}
      </div>
    </div>
  );
}

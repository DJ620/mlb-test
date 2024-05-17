"use client";
import { useState, useEffect } from "react";
import Division from "./Division";

type props = {
  leagueName: string;
  teams: any;
};

export default function League({ leagueName, teams }: props) {
  const [sortedDivisions, setSortedDivisions] = useState<any>({});

  useEffect(() => {
    const divisions: any = {};
    teams.forEach((team: any) => {
      const divisionName = team.division.name;
      divisions[divisionName] = divisions[divisionName] || [];
      divisions[divisionName].push(team);
    });
    setSortedDivisions(divisions);
  }, [teams]);

  return (
    <div>
      <h3 className="text-4xl mb-5">{leagueName}</h3>
      <div>
        {Object.keys(sortedDivisions).length > 0 &&
          Object.keys(sortedDivisions).map((division: any) => {
            return (
              <div key={division} className="mb-5">
                <Division
                  divisionName={division}
                  teams={sortedDivisions[division]}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

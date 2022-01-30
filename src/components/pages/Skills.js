import React from "react";
import SkillCard from "./../SkillCard";
import skills from "../../skills";

export default function Skills() {
  return (
    <div className="w-100">
      <SkillCard skills={skills} />
    </div>
  );
}

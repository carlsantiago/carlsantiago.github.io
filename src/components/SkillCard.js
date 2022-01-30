import React from "react";
var Accordion = require("react-bootstrap").Accordion;

function SkillCard({ skills }) {
  return (
    <div>
      <Accordion defaultActiveKey="0" className="bg-dark" flush>
        {skills.map((x) => (
          <Accordion.Item eventKey={x.id}>
            <Accordion.Header>{x.name}</Accordion.Header>
            <Accordion.Body>
              {x.list.map((y) => (
                <p>
                  {y.name} <nbsp />
                  {y.learned ? (
                    <span></span>
                  ) : (
                    <span className="badge bg-info rounded-pill">Learning</span>
                  )}
                </p>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default SkillCard;

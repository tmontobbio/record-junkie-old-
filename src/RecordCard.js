import React from "react";
import "./RecordCard.css";
import { Card } from "semantic-ui-react";

export default function RecordCard({ image_url, artist }) {
  return (
    <Card>
      <div className="record-card">
        <img src={image_url} alt={artist} className="image" />
      </div>
    </Card>
  );
}

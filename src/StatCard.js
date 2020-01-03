import React from "react";

function StatCard({ icon, label, number, formatNumber }) {
  return (
    <div class="stat-card">
      <div class="stat-line">
        <span>{icon}</span>
        <strong>{label}</strong>
      </div>
      <p>{formatNumber(number)}</p>
    </div>
  );
}

export default StatCard;

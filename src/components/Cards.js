import React from "react";
import Card from "./Card";
import "./Cards.scss";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LanguageIcon from "@material-ui/icons/Language";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

function Cards() {
  return (
    <div className="cards">
      <Card
        Icon={AccessTimeIcon}
        detail="We provide 24 Hours of full services."
      />
      <Card
        Icon={LanguageIcon}
        detail="You will have get Access in everywhere."
      />
      <Card Icon={AttachMoneyIcon} detail="Invest your money just in time." />
      <Card
        Icon={VerifiedUserIcon}
        detail="We are trusted for at least 1000k users."
      />
    </div>
  );
}

export default Cards;

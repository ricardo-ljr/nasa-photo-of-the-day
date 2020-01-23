import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import moment from "moment";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Calendar from "react-calendar";

export default function NasaGrid() {
  const [photoData, setPhotoData] = useState([]);

  const today = moment().format("YYYY-MM-DD");
  const yesterday = moment()
    .subtract(1, "days")
    .format("YYYY-MM-DD");

  const options = [today, yesterday];

  function changeDate() {
    setTimeout(function() {
      const menu = document.querySelector(".is-selected").innerHTML;
      setDate(menu);
      setCurrentOption(menu);
    }, 10);
  }

  const [date, setDate] = useState(today);

  const [currentOption, setCurrentOption] = useState(date);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=t3F5j6ddCIh7btoXDgbTFmLp5COSAOfvqvQ03bUd&date=${date}`
      )
      .then(response => {
        console.log(response);
        setPhotoData(response.data);
      });
  }, [date]);

  return (
    <div>
      <Dropdown
        id="dropdown"
        options={options}
        onChange={changeDate}
        value={currentOption}
        placeholder="Select an option"
      />
      <NasaCard
        title={photoData.title}
        date={photoData.date}
        explanation={photoData.explanation}
        url={photoData.url}
      />
    </div>
  );
}

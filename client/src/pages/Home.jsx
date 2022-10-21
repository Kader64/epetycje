import Form from "../components/Form";
import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";

function Home() {
  const [formData, setFormData] = useState();
  useEffect(() => {
    window.reveal();
    fetch("/forms")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        var arr = JSON.parse(data);
        setFormData(arr);
      })
  }, []);
  return (
    <div>
      <section className="start_block">
        <div className="start-right">
          <div className="start-title">
            E-ANKIETY.PL - TWÓJ WYBÓR MA ZNACZENIE!
          </div>
          <div className="start-desc">
          {!formData ? "Loading..." : formData} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </section>
      <section className="searchBar_block">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Znajdź ankietę"></input>
          <button type="submit" class="searchButton">
            <div className="icon-search"></div>
          </button>
        </div>
      </section>
      <section className="forms_block">
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
        <Form />
      </section>
    </div>
  );
}
export default Home;

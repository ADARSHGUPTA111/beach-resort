import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, veritatis.",
      },
      {
        icon: <FaHiking />,
        title: "Wonderful hike",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, veritatis.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, veritatis.",
      },
      {
        icon: <FaBeer />,
        title: "Beer w/o fear",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, veritatis.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

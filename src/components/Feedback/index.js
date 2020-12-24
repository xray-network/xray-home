import React from "react"
import style from "./style.module.scss"

const items = [
  {
    description:
      "The quality is incredible high and the flexibility is limitless! Clean UI Admin Template accelerated development 3x times and reduced QA issues by 50%. It's probably saved us $30,000 on this project.",
    conclusion: "Highly recommended to buy!",
    name: "Jhon Allen",
    company: "Soft Networks, Germany",
  },
  {
    description:
      "I've looked at hundreds of bootstrap themes, and this one is by far the best I've come across for our project. The design is modern, and not cluttered. The code is clean and easily manageable, and their customer support has been excellent.",
    conclusion: "It's new, but this one is definitely a winner!",
    name: "Benjamin Kouba",
    company: "LEAF9.com, United States",
  },
  {
    description:
      "I have over 12 years of full stack web programming experience. They did a really awesome job with this.",
    conclusion: "Well worthwhile. Great time saver.",
    name: "Tom N",
    company: "Clean UI Customer, United States",
  },
]

export default () => {
  return (
    <div className="cui__block">
      <div className="container-fluid">
        <div className={style.feebback}>
          <h6 className="cui__block__heading">Customers Feedback</h6>
          <div className="row">
            {items.map((item, index) => (
              <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={300 * (index + 1)}>
                <div className={style.item}>
                  <div className={style.rating}>
                    <span className="mr-2">5</span>
                    <img src="/resources/images/star.svg" alt="" />
                  </div>
                  <div className={style.description}>{item.description}</div>
                  <div className={style.conclusion}>{item.conclusion}</div>
                  <div className={style.name}>{item.name}</div>
                  <div className={`${style.company} text-muted`}>
                    {item.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

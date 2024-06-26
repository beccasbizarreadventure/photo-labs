import React, { useState } from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { selectTopic, topic } = props;

  // HOVER EFFECT FOR TOPICS //
  const [mouseOver, setOver] = useState(false);
  let listItemStyle = "topic-list__item span";
  mouseOver
    ? (listItemStyle = "topic-list__item span:hover")
    : (listItemStyle = "topic-list__item span");
  return (
    <li className="topic-list__item">
      <span
        className={listItemStyle}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
        onClick={selectTopic}
      >
        {topic.title}
      </span>
    </li>
  );
};

export default TopicListItem;

import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topic}) => {
  return (
    <li className="topic-list__item">
      {topic.title}
    </li>
  );
};

export default TopicListItem;

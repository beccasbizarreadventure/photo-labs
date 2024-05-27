import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  return (
    <ul className="top-nav-bar__topic-list">
      {props.topics.map((topicItem) => (
        <TopicListItem
          topic={topicItem}
          key={topicItem.id}
          selectTopic={() => props.selectTopic(topicItem)}
        />
      ))}
    </ul>
  );
};

export default TopicList;

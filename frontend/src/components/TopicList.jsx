import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const { topics, selectTopic } = props;
  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((topicItem) => (
        <TopicListItem
          topic={topicItem}
          key={topicItem.id}
          selectTopic={() => selectTopic(topicItem)}
        />
      ))}
    </ul>
  );
};

export default TopicList;

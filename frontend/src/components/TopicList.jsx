import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({topics}) => {
  return (
    <ul className="top-nav-bar__topic-list">
      {
        topics.map((topicItem, id) => (
          <TopicListItem topic={topicItem} key={id} />
        ))
      }
    </ul>
  );
};

export default TopicList;

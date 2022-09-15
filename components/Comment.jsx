import React from "react";
import Reply from "./Reply";
import { comments } from "../libs/comments";

export default function Comment(props) {
  const Profile_Comment = comments;

  return (
    <div>
      {/* Entire Comment div */}
      <div>
        <div>
          {Profile_Comment.map((x, i) => {
            return (
              <div key={i}>
                <div className="d-flex gap-2 my-2">
                  <img
                    src={`${x.userImagePath}`}
                    width="48"
                    height="48"
                    className="rounded-circle"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="rounded rounded-3 p-2"
                    style={{ backgroundColor: "#3A3B3C" }}
                  >
                    <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
                      {x.username}
                    </span>
                    <br />
                    <span style={{ color: "#E4E6EB" }}>{x.commentText}</span>
                    <div
                      className="d-flex align-items-center gap-1"
                      style={{ display: x.likeNum > 0 ? "" : "none" }}
                    >
                      <img src="/like.svg" width={20}></img>
                      <span style={{ color: "#B0B3B8" }}>{x.likeNum} คน</span>
                    </div>
                  </div>
                </div>
                {x.replies.map((y, idx) => {
                  return (
                    <Reply
                      key={idx}
                      username={y.username}
                      userImagePath={y.userImagePath}
                      replyText={y.replyText}
                      likeNum={y.likeNum}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/*render Reply here... */}
    </div>
  );
}

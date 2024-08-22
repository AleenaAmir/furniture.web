import React from "react";
import "./email.css";
function Email() {
  return (
    <div className="email-box">
      <h1 className="email-h">Join Our Mailing List</h1>
      <p className="email-p">
        Sign up to receive inspiration, product updates,
        <br /> and special offers from our team.
      </p>
      <form action="https://formspree.io/f/xayzrwbz" method="post">
        <input type="email" name="email" placeholder="example@gmail.com" className="input" />
        <button className="i-btn">submit</button>
      </form>
    </div>
  );
}

export default Email;

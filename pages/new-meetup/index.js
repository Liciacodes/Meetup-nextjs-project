//our-domain.com/new-meetup
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";

export default function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return (
    <Layout>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Layout>
  );
}

import { Suspense } from "react";
import ProfileTabs from "../../../componants/profile/profile-tabs";

export default function GameDetail() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileTabs />
    </Suspense>
  );
}

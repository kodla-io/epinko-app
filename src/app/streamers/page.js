import AllStreamersList from "../../../componants/streamers/all-streamers";
import TextBanner from "../../../componants/text-banner/TextBanner"

export default function StreamerDetail() {
  return (
    <>
      <AllStreamersList />
      <div className="mt-0 md:mt-20">
        <TextBanner />
      </div>
    </>
  );
}

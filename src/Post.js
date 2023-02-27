import Card from "./components/Card";
import People from "./assets/people_working.avif";

const Post = () => {
  return (
    <div className="mt-8">
      <div className="font-sans text-xl">Recommended for you</div>
      <div className="mt-4 flex justify-center items-center gap-6">
        <Card image={People} title="Lorem ipsum dolor sit amet" description="How do you create compelling presentations that wow your colleagues and impress your managers?" link="https://google.com/" />
        <Card image={People} title="Lorem ipsum dolor sit amet" description="How do you create compelling presentations that wow your colleagues and impress your managers?" link="https://google.com/" />
        <Card image={People} title="Lorem ipsum dolor sit amet" description="How do you create compelling presentations that wow your colleagues and impress your managers?" link="https://google.com/" />
        <Card image={People} title="Lorem ipsum dolor sit amet" description="How do you create compelling presentations that wow your colleagues and impress your managers?" link="https://google.com/" />

      </div>
    </div>
  )
}

export default Post
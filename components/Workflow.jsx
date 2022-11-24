import Link from "next/link";
import Image from "next/image";
import React from "react";
import { PrimaryButton } from "./Buttons";

function Workflow() {
  return (
    <div id="Workflow" className="flex justify-center p-[100px] bg-white">
      <div className="flex flex-col max-w-[1720px] w-full">
        <div className="flex">
          <h2 className="font-noto text-[90px] w-full mb-4">WORKFLOW</h2>
        </div>
        <div className="grid grid-cols-12 gap-20">
          <div className="item1 col-span-5 flex flex-col gap-24">
            <p>
              It is particularly important for us that you as a customer are
              actively involved in creative processes and that you know at all
              times which step we are about to take next. Learn more about our
              workflow and our communication with you as a customer here.
            </p>
            <Image
              src="/graphic/workflow/workflow.png"
              width={722}
              height={585}
              alt="workflow"
            />
          </div>
          <div className="item2 col-span-7 flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-[26px]">
                HOW WE DEAL WITH PROJECTS FROM START TO FINISH
              </h3>
              <Link href="#">
                <svg
                  width="25"
                  height="21"
                  viewBox="0 0 25 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.57348 0V3.11353H18.6985L0 18.7141L2.50651 20.9091L21.205 5.30857V18.5541H24.7604V0H3.57348Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </div>
            <p className="max-w-[812px]">
              The key to successful collaboration and results that are perfectly
              tailored to you is clear goal setting and the elimination of
              misunderstandings.
              <br />
              <br />
              Before each project, we therefore obtain detailed information from
              you about what you expect from our service, what your goals are
              and what you particularly value. Our experts will also be happy to
              advise you on this step with their extensive specialist knowledge.
              <br />
              <br />
              As soon as your expectations have been clarified, we get down to
              work. We actively involve you, the customer, in the processes so
              that you always know where your project currently stands.
            </p>
            <PrimaryButton href="#" text="LEARN MORE"/>
            <div className="flex flex-col gap-12 mt-12">
                <Link href="#" className="font-noto text-[26px] underline">HOW WE COMMUNICATE WITH THE CLIENT</Link>
                <Link href="#" className="font-noto text-[26px] underline">STAGES OF PROCESS</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workflow;

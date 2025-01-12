"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import SabahAvatar from "@/components/SabahAvatar";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import About from "@/components/About";
import Profpic from "@/components/Profpic";

export default function Home() {
  return (
    <div>
      <section>
        <div
          className="flex flex-col items-center justify-between h-screen bg-gray-950"
          style={{
            backgroundImage: "url('/images/herobg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: -5,
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center w-full bg-red-500">
            <div className="flex flex-col items-start justify-center w-full z-10 px-4 sm:px-10 lg:px-20 ">
              <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                <div className="text-left">Hi</div>
                <div>
                  I'm <span className="text-[#915eff]">_Sabah</span>
                </div>
              </h1>
              <div className="flex gap-4 mt-4 sm:flex-col md:flex-row">
                <button
                  className="btn rounded-3xl"
                  onClick={() =>
                    window.open("https://github.com/sabah-naveed", "_blank")
                  }
                >
                  Github
                  <FiGithub className="text-purple-500" />
                </button>
                <button
                  className="btn rounded-3xl"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/sabah-naveed/",
                      "_blank"
                    )
                  }
                >
                  LinkedIn
                  <FiLinkedin className="text-blue-500" />
                </button>
                <button
                  className="btn rounded-3xl"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/sabah.naveed",
                      "_blank"
                    )
                  }
                >
                  Instagram
                  <FiInstagram className="text-pink-500" />
                </button>
              </div>
              <div className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-4 mr-10 text-left">
                I am:
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("a CS student")
                      .pauseFor(2500)
                      .deleteChars(10)
                      .start();
                    typewriter
                      .typeString("software engineer")
                      .pauseFor(2500)
                      .deleteChars(19)
                      .start();
                    typewriter
                      .typeString("an app developer")
                      .pauseFor(2500)
                      .deleteChars(16)
                      .start();
                    typewriter
                      .typeString("a raccoon lover")
                      .pauseFor(2500)
                      .deleteChars(15)
                      .start();
                    typewriter
                      .typeString("a brain and computer enthusiast.")
                      .pauseFor(2500)
                      .stop();
                  }}
                />
              </div>
            </div>
            <div className="z-10 w-full md:w-auto flex justify-center mt-10 md:mt-0 ">
              <Profpic />
            </div>
          </div>
        </div>
      </section>
      <section>
        <About />
      </section>
      <section>
        <p>
          Lorem ipsum dolor sit amet. Est totam explicabo est cumque tenetur sit
          velit placeat et iusto ipsa et galisum natus et dolorem eligendi. Sed
          sunt tenetur et sequi harum eos officia quaerat ut commodi quia est
          reprehenderit quia sed impedit natus sed accusamus ratione. Et vero
          quia aut consequatur quisquam sed eveniet voluptatem hic voluptas
          voluptatibus in aperiam voluptatem ab dolores sapiente sed quam
          cupiditate. Sit neque quos et reiciendis ratione ad repellendus velit
          sit libero reiciendis hic culpa sunt qui dolore ipsa. In labore eaque
          et fuga beatae id aliquid omnis qui explicabo sint ea dignissimos
          dignissimos ut Quis quae qui rerum iure. Ut provident eveniet non amet
          recusandae eos tenetur quos. Id aspernatur nihil et eligendi
          consequatur et incidunt quibusdam est nihil nisi vel voluptatem itaque
          et accusantium repellat ea quos quaerat. Id itaque consequatur a amet
          quia quo nulla quos aut quis doloremque 33 suscipit itaque. In iure
          cupiditate non doloribus voluptates et omnis possimus ut eaque velit
          et aperiam nostrum. Et dolores maxime vel dolor alias eum repellendus
          consequatur. Et enim internos aut dolores nobis aut optio odit nam
          galisum reprehenderit.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Est totam explicabo est cumque tenetur sit
          velit placeat et iusto ipsa et galisum natus et dolorem eligendi. Sed
          sunt tenetur et sequi harum eos officia quaerat ut commodi quia est
          reprehenderit quia sed impedit natus sed accusamus ratione. Et vero
          quia aut consequatur quisquam sed eveniet voluptatem hic voluptas
          voluptatibus in aperiam voluptatem ab dolores sapiente sed quam
          cupiditate. Sit neque quos et reiciendis ratione ad repellendus velit
          sit libero reiciendis hic culpa sunt qui dolore ipsa. In labore eaque
          et fuga beatae id aliquid omnis qui explicabo sint ea dignissimos
          dignissimos ut Quis quae qui rerum iure. Ut provident eveniet non amet
          recusandae eos tenetur quos. Id aspernatur nihil et eligendi
          consequatur et incidunt quibusdam est nihil nisi vel voluptatem itaque
          et accusantium repellat ea quos quaerat. Id itaque consequatur a amet
          quia quo nulla quos aut quis doloremque 33 suscipit itaque. In iure
          cupiditate non doloribus voluptates et omnis possimus ut eaque velit
          et aperiam nostrum. Et dolores maxime vel dolor alias eum repellendus
          consequatur. Et enim internos aut dolores nobis aut optio odit nam
          galisum reprehenderit.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Est totam explicabo est cumque tenetur sit
          velit placeat et iusto ipsa et galisum natus et dolorem eligendi. Sed
          sunt tenetur et sequi harum eos officia quaerat ut commodi quia est
          reprehenderit quia sed impedit natus sed accusamus ratione. Et vero
          quia aut consequatur quisquam sed eveniet voluptatem hic voluptas
          voluptatibus in aperiam voluptatem ab dolores sapiente sed quam
          cupiditate. Sit neque quos et reiciendis ratione ad repellendus velit
          sit libero reiciendis hic culpa sunt qui dolore ipsa. In labore eaque
          et fuga beatae id aliquid omnis qui explicabo sint ea dignissimos
          dignissimos ut Quis quae qui rerum iure. Ut provident eveniet non amet
          recusandae eos tenetur quos. Id aspernatur nihil et eligendi
          consequatur et incidunt quibusdam est nihil nisi vel voluptatem itaque
          et accusantium repellat ea quos quaerat. Id itaque consequatur a amet
          quia quo nulla quos aut quis doloremque 33 suscipit itaque. In iure
          cupiditate non doloribus voluptates et omnis possimus ut eaque velit
          et aperiam nostrum. Et dolores maxime vel dolor alias eum repellendus
          consequatur. Et enim internos aut dolores nobis aut optio odit nam
          galisum reprehenderit.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Est totam explicabo est cumque tenetur sit
          velit placeat et iusto ipsa et galisum natus et dolorem eligendi. Sed
          sunt tenetur et sequi harum eos officia quaerat ut commodi quia est
          reprehenderit quia sed impedit natus sed accusamus ratione. Et vero
          quia aut consequatur quisquam sed eveniet voluptatem hic voluptas
          voluptatibus in aperiam voluptatem ab dolores sapiente sed quam
          cupiditate. Sit neque quos et reiciendis ratione ad repellendus velit
          sit libero reiciendis hic culpa sunt qui dolore ipsa. In labore eaque
          et fuga beatae id aliquid omnis qui explicabo sint ea dignissimos
          dignissimos ut Quis quae qui rerum iure. Ut provident eveniet non amet
          recusandae eos tenetur quos. Id aspernatur nihil et eligendi
          consequatur et incidunt quibusdam est nihil nisi vel voluptatem itaque
          et accusantium repellat ea quos quaerat. Id itaque consequatur a amet
          quia quo nulla quos aut quis doloremque 33 suscipit itaque. In iure
          cupiditate non doloribus voluptates et omnis possimus ut eaque velit
          et aperiam nostrum. Et dolores maxime vel dolor alias eum repellendus
          consequatur. Et enim internos aut dolores nobis aut optio odit nam
          galisum reprehenderit.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Est totam explicabo est cumque tenetur sit
          velit placeat et iusto ipsa et galisum natus et dolorem eligendi. Sed
          sunt tenetur et sequi harum eos officia quaerat ut commodi quia est
          reprehenderit quia sed impedit natus sed accusamus ratione. Et vero
          quia aut consequatur quisquam sed eveniet voluptatem hic voluptas
          voluptatibus in aperiam voluptatem ab dolores sapiente sed quam
          cupiditate. Sit neque quos et reiciendis ratione ad repellendus velit
          sit libero reiciendis hic culpa sunt qui dolore ipsa. In labore eaque
          et fuga beatae id aliquid omnis qui explicabo sint ea dignissimos
          dignissimos ut Quis quae qui rerum iure. Ut provident eveniet non amet
          recusandae eos tenetur quos. Id aspernatur nihil et eligendi
          consequatur et incidunt quibusdam est nihil nisi vel voluptatem itaque
          et accusantium repellat ea quos quaerat. Id itaque consequatur a amet
          quia quo nulla quos aut quis doloremque 33 suscipit itaque. In iure
          cupiditate non doloribus voluptates et omnis possimus ut eaque velit
          et aperiam nostrum. Et dolores maxime vel dolor alias eum repellendus
          consequatur. Et enim internos aut dolores nobis aut optio odit nam
          galisum reprehenderit.
        </p>
        <p>
          Lorem ipsum dolor sit amet. Est totam explicabo est cumque tenetur sit
          velit placeat et iusto ipsa et galisum natus et dolorem eligendi. Sed
          sunt tenetur et sequi harum eos officia quaerat ut commodi quia est
          reprehenderit quia sed impedit natus sed accusamus ratione. Et vero
          quia aut consequatur quisquam sed eveniet voluptatem hic voluptas
          voluptatibus in aperiam voluptatem ab dolores sapiente sed quam
          cupiditate. Sit neque quos et reiciendis ratione ad repellendus velit
          sit libero reiciendis hic culpa sunt qui dolore ipsa. In labore eaque
          et fuga beatae id aliquid omnis qui explicabo sint ea dignissimos
          dignissimos ut Quis quae qui rerum iure. Ut provident eveniet non amet
          recusandae eos tenetur quos. Id aspernatur nihil et eligendi
          consequatur et incidunt quibusdam est nihil nisi vel voluptatem itaque
          et accusantium repellat ea quos quaerat. Id itaque consequatur a amet
          quia quo nulla quos aut quis doloremque 33 suscipit itaque. In iure
          cupiditate non doloribus voluptates et omnis possimus ut eaque velit
          et aperiam nostrum. Et dolores maxime vel dolor alias eum repellendus
          consequatur. Et enim internos aut dolores nobis aut optio odit nam
          galisum reprehenderit.
        </p>
      </section>
    </div>
  );
}

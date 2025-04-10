import { MdOutlineFileDownload } from "react-icons/md";
import { TbMailUp } from "react-icons/tb";
import { ButtonPop } from "../../ui/ButtonPop";
import { Links } from "../../ui/Links";
// import { resumeUrl } from "../../ui/AppLayout";

export function CtaButtons() {
  return (
    <>
      <ButtonPop>
        <Links
          className={`group bg-gradient-to-r from-gold-light to-gold-dark text-background shadow-btn-main outline outline-[1px] transition-all duration-100 hover:outline hover:outline-[1px] hover:outline-accent`}
          to="mailto:toushiefansari.dev@gmail.com"
        >
          let&apos;s work together
          <TbMailUp className="text-xl transition-all duration-100 group-hover:text-text" />
        </Links>
      </ButtonPop>
      <ButtonPop>
        <Links
          to={"/resume/toushiefansari.pdf"}
          className={
            "group min-w-[228px] text-text outline outline-[1px] transition-all duration-100"
          }
        >
          download resume
          <MdOutlineFileDownload className="text-xl transition-all group-hover:text-accent" />
        </Links>
      </ButtonPop>
    </>
  );
}

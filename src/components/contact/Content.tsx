import { PageTitleSecondary } from "../../ui/PageTitleSecondary";
import { Paragraph } from "../../ui/Paragraph";

export function Content() {
  return (
    <>
      <PageTitleSecondary
        className="capitalize text-text"
        title={'"Open to New Opportunities and Collaborations"'}
      />
      <Paragraph className={"text-center text-text-secondary"}>
        If you have a project idea, a collaboration proposal, or simply want to
        connect and explore potential synergies, feel free to drop me a line
      </Paragraph>
    </>
  );
}

import ReactLoading from "react-loading";
import { theme } from "common/styles/globalStyles";
import ContentContainer from "common/styles/ContentContainer";

function Loading() {
  return (
    <ContentContainer>
      <ReactLoading
        type="spin"
        color={theme.colors.primary}
        height={"10%"}
        width={"10%"}
      />
    </ContentContainer>
  );
}

export default Loading;

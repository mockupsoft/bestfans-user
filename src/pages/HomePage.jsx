// Layouts
import Container from "../layout/Container";
import Content from "../layout/Content";
import Sidebar from "../layout/Sidebar";
import Widgets from "../layout/Widgets";

const HomePage = () => {
  return (
    <Container>
      <Sidebar/>
      <Content/>
      <Widgets/>
    </Container>
  )
}

export default HomePage
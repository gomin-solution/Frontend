import { useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AdviceForm from "../components/form/AdviceForm";

function AdvicePost() {
  const location = useLocation();
  const category = location.state;

  return (
    <Layout>
      <AdviceForm category={category} />
    </Layout>
  );
}

export default AdvicePost;

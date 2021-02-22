import Layout from "../../components/Layout";

export default function Company() {
  return (
    <Layout>
      <div className="uk-padding">
        <div
          style={{ margin: "0 auto" }}
          className="uk-width-2xlarge uk-card uk-card-large uk-card-default uk-card-large uk-card-body"
        >
          <article className="uk-article">
            <h1 className="uk-article-title">
              <a className="uk-link-reset" href="">
                Manufacturing
              </a>
            </h1>

            {/* <p class="uk-article-meta">
              Written by <a href="#">Super User</a> on 12 April 2012. Posted in{" "}
              <a href="#">Blog</a>
            </p> */}

            <p className="uk-text-lead">
              AI – The driving force of your industry digital transformation The
              latest digital manufacturing trends are aimed at connecting
              physical and virtual factory environments to boost productivity,
              efficiency and profitability.
            </p>

            <p>
              Evolution of the manufacturing industry can be seen with the
              implementation of <b>Artificial Intelligence and Robotics</b>.
              This is to minimize the human workforce while improve efficiency
              and simplify the whole manufacturing system. If earlier, more than
              one person was required to manage one task system, then with the
              implementation of AI-based robots, now one bot per task system is
              sufficient. We are going to see very soon 
              <b>
                what roles AI and robotics are playing in the manufacturing
                industry
              </b>
              .
            </p>

            <p>
              AI is the reason behind evolution in the manufacturing industry.
              They are making production decisions smarter and instant. Nowadays
              people prefer customized products over costly industrially
              produced products. 
              <b>With the help of AI, labor cost can be minimized</b>. AI is the
              next step after robotics for improving productivity and
              minimization of cost of production. The main causes behind the
              logical evolution of industries are poor demand and capacity
              planning, unsafe workplaces i.e. workers are exposed to essential
              harmful products used in factories, inefficiency, longer and
              costlier production etc.
            </p>

            <p>
              <b>
                Artificial Intelligence is highly essential for the survival and
                improvement of the industries
              </b>
              . Robots play a highly important role in the production, packing,
              and shipping of products with least manual help. Artificial
              intelligence and robotics, in collaboration with new technology
              like 3D printing, will prove beneficial in bringing advancement in
              manufacturing and fulfilling increasing consumer demands.
            </p>
          </article>
        </div>
      </div>
    </Layout>
  );
}

import Layout from '../components/Layout'
import Hero from '../sections/Hero'
import ProblemStatement from '../sections/ProblemStatement'
import SolutionArchitecture from '../sections/SolutionArchitecture'
import ProductModules from '../sections/ProductModules'
import AttackScenarios from '../sections/AttackScenarios'
import Pricing from '../sections/Pricing'
import WhySAQ from '../sections/WhySAQ'
import SecurityCompliance from '../sections/SecurityCompliance'
import MetricsDashboard from '../sections/MetricsDashboard'
import ContactForm from '../sections/ContactForm'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ProblemStatement />
      <SolutionArchitecture />
      <ProductModules />
      <AttackScenarios />
      <Pricing />
      <WhySAQ />
      <SecurityCompliance />
      <MetricsDashboard />
      <ContactForm />
    </Layout>
  )
}

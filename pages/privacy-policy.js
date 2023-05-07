import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.md}>
        <div className="max-w-4xl pt-12 pb-24 mx-auto">
          <h1 className="text-4xl lh-6 ld-04 font-bold title mb-6">
            Privacy Policy
          </h1>
        
        <div className="text-xl line-height: 6rem font-semibold lh-10 ld-02 font-bold title mb-6">
        At MyWebClass.org, we are committed to protecting and respecting your privacy. This Privacy Policy outlines how we collect, use, store, and share your personal information when you visit our website, interact with our services, or communicate with our team. By using our website and services, you agree to the collection and use of information in accordance with this policy.
<br/><br/>
Information We Collect:<br/><br/>
a. Personal Information:<br/>
When you register on our website, subscribe to our newsletter, or contact us through our contact form, we may collect personal information, such as your name, email address, phone number, or other details that help us provide our services and support.
<br/><br/>
b. Non-Personal Information:<br/>
We may collect non-personal information about your visit to our website, including but not limited to your IP address, browser type, operating system, referring website, and pages you visited. This information helps us improve our website, services, and marketing efforts.
<br/><br/>
c. Cookies:<br/><br/>
Our website uses cookies to enhance your browsing experience, remember your preferences, and gather analytics data. You can choose to disable cookies through your browser settings, but doing so may affect your ability to use certain features of our website.
<br/><br/>
How We Use Your Information:<br/>
We use the information we collect for various purposes, including:
<br/><br/>
To provide, maintain, and improve our services.<br/>
To communicate with you, respond to your inquiries, and send you newsletters or other information you've requested.<br/>
To personalize and tailor our services to your preferences.<br/>
To analyze trends, monitor usage, and improve the overall performance of our website.<br/>
To comply with legal requirements, enforce our Terms of Service, and protect the rights, property, or safety of our users and the public.<br/><br/>
Sharing Your Information:<br/>
We do not sell or rent your personal information to third parties. However, we may share your information with trusted third-party service providers, such as email marketing services, as necessary to provide our services and support. These third parties are required to protect your information and use it only for the purposes for which it was shared.
<br/><br/>
Security:<br/>
We are committed to protecting your information and have implemented appropriate security measures to safeguard your data from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of data transmission or storage can guarantee absolute security.
<br/><br/>
Links to External Websites:<br/>
Our website may contain links to external websites operated by third parties. Please note that we are not responsible for the privacy practices of these websites, and we encourage you to review their privacy policies before providing any personal information.
<br/><br/>
Children's Privacy:<br/>
Our services are not directed towards individuals under the age of 13, and we do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us, and we will take steps to delete the information as soon as possible.
<br/><br/>
Changes to This Privacy Policy:<br/>
We may update our Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to periodically review this page for the latest information on our privacy practices.
<br/><br/>
Contact Us:<br/>
If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at [email protected]
<br/><br/>
Last Updated: [Date]
        </div>
        </div>
      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

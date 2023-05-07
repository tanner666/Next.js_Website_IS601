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
        <div className="max-w-4xl pt-12 pb-24 mx-auto text-center">
          <h1 className="text-4xl lh-6 ld-04 font-bold title mb-6">
            Empowering Educators with Comprehensive Tools and Support
          </h1>
        
        <div className="text-xl line-height: 6rem font-semibold lh-10 ld-02 font-bold title mb-6">
        At MyWebClass.org, we strive to provide educators with a wide array of services designed to enrich their teaching practices and empower their students with the essential skills to thrive in the AI-driven world. From comprehensive lesson plans to engaging video tutorials, we offer a variety of resources that cater to different learning styles and needs. Explore our range of services and discover how we can support you on your journey to revolutionize education.
        <br/><br/>
          <strong className="text-2xl">Our Services:</strong><br/><br/>

          <strong>Lesson Plans & Curriculum</strong><br/>
          Our extensive library of research-based lesson plans and curriculum provides educators with a solid foundation for teaching AI, data science, web development, and other emerging fields. Aligned with Agile and Lean principles, our lesson plans are designed to foster creativity, adaptability, and collaboration while ensuring students acquire the knowledge and skills necessary for success in the digital age.
          <br/><br/>
          <strong>Video Tutorials & Webinars</strong><br/>
          To complement our written resources, we offer a selection of engaging video tutorials and webinars led by experienced educators and industry professionals. These multimedia resources cover a wide range of topics and provide step-by-step guidance, ensuring teachers and students alike can easily grasp complex concepts and develop practical skills.
          <br/><br/>
          <strong>Additional Learning Resources & Tools</strong><br/>
          Understanding that every learner is unique, we provide a variety of additional learning resources and tools to cater to different needs and preferences. From interactive quizzes and coding exercises to eBooks and articles, our platform offers diverse materials that enrich the learning experience and support the mastery of essential skills.
          <br/><br/>
          <strong>Professional Development Opportunities</strong><br/>
          At MyWebClass.org, we believe in the importance of continuous growth and learning for educators. Our platform offers various professional development opportunities, such as workshops, seminars, and online courses, to help teachers stay up-to-date with the latest trends, technologies, and pedagogical approaches in AI and web development education.
          <br/><br/>
          <strong>Community & Collaboration</strong><br/>
          We foster a thriving community of like-minded educators who share best practices, insights, and ideas for incorporating Agile and Lean principles into their classrooms. Through our online forums, social media channels, and networking events, we facilitate collaboration, support, and inspiration among our members, promoting a culture of continuous improvement and innovation.
          <br/><br/>
          <strong>Tailored Support & Consultation</strong><br/>
          Our team of experienced education professionals and industry experts is available to provide tailored support and consultation services to schools and educators looking to integrate Agile and Lean principles into their classrooms. From curriculum development to classroom management, we offer personalized guidance to help you transform your teaching practices and create a lasting impact on your students.
          <br/><br/>
          Explore our wide range of services and discover how MyWebClass.org can support you in revolutionizing education for the AI-driven world. Together, we can equip the next generation with the skills and knowledge they need to navigate the challenges and opportunities of the digital age.
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

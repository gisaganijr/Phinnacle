import React, { useEffect, useState, useRef, memo } from 'react';
import { useParams, useNavigate} from "react-router-dom";
import styled from 'styled-components';
import compose from 'recompose/compose';
import { renameProp } from 'recompose';
import windowDimensions from 'react-window-dimensions';
import { isWideScreen as _isWideScreen } from 'utils/isWideScreen';
import withWidth from '@material-ui/core/withWidth';
import useIntersection from 'common/useIntersection';
import { find } from 'lodash';
import { colors, headerConfig } from 'variables';
import { getCustomWidthCat, isMediumAndSmaller, isSmallAndExtraSmall } from 'utils/screenWidth';
import PageSection  from 'components/page-section';
import { getContentType } from 'helpers';
import P from 'components/p';
import useGlobalStore from 'store';
import Pagination from './pagination';
import Header from 'components/header';
import CompanyNameEmphasized from 'components/company-name-emphasized';

const services = [
    {
        index: 0,
        title: 'Solution Architecture',
        name: 'SolutionArchitecture',
        description: (
            <>
                <P size="sm" twClass="mb-4">
                    At <CompanyNameEmphasized />, we recognize the importance of solutions architecture as having a crucial role for creating new enterprise solutions. With this service, we ensure that every solution will meet the business requirements and the enterprise setup as a whole. With our solution architecture’s best practices, we help take your business to the next level as we translate technical business needs into practical IT solutions, while establishing rules and instructions for proper delivery. Not only does this service entail finding IT solutions to the enterprise needs, it can also be regarded as additional support system that will provide your organization with needed structure and can help reduce the scope of complexities brought about by digitalization. 
                </P>
                <P size="sm">
                    Our expert solutions architects will take charge of assessing your current IT systems, designing and recommending new or updated technologies, and integrating & developing the recommended solutions. At the start of engaging with our solutions architecture service, we work with your teams to have a deeper understanding of the following:
                </P>
                <ul className="pl-8 list-disc list-outside mb-4"> 
                    <li>how your IT systems currently works with your business setup</li>
                    <li>your current business and IT concerns</li>
                    <li>what is the detailed IT systems workflow</li> 
                </ul>
                <P size="sm" twClass="mb-4">
                    Upon understanding the basics, our solutions architects will then develop the needed functional and technical plan.
                </P>
                <P size="sm">
                    For the Functional Scope, this will entail:
                </P>
                <ul className="pl-8 list-disc list-outside mb-4"> 
                    <li>Describing the recommended IT system Functionality and Integrations needed</li>
                    <li>Establishing the expected impact on business processes and outcomes</li>
                    <li>Laying out the expected internal and external dependencies and interactions</li> 
                </ul>
                <P size="sm">
                    While the Technical Scope will involve:
                </P>
                <ul className="pl-8 list-disc list-outside mb-4"> 
                    <li>Identifying specific recommendations on development and/or coding</li>
                    <li>Providing detailed integrated solutions</li>
                    <li>Providing the systems documentation</li> 
                    <li>Mapping out of ideal workflow for user</li>
                    <li>Identifying potential user interaction scenarios</li>
                    <li>Anticipating future improvements and upgrades of functional scope</li>
                </ul>
                <P size="sm">
                    Overall, a proper Solutions Architecture will greatly benefit an organization as it will increase its IT systems capabilities and significantly reduce the risk if malfunctions, bugs or project blowout.
                </P>
            </>
        )
    },
    {
        index: 1,
        title: 'Healthcare Systems',
        name: 'HealthcareSystems',
        description: (
            <>
                <P size="sm" twClass="mb-4">
                    The healthcare industry has evolved so much and now is in enormous pressure and is expected to create excellent services to improve patient care. IT has come into play and had become key part in the healthcare setting. 
                </P>
                <P size="sm" twClass="mb-4">
                    Every healthcare organization require processes that are efficient with continuous operational improvements in order to have the best patient-care services. <CompanyNameEmphasized /> professionals have worked with some of the best and most advanced countries in upgrading their healthcare systems. We understand that healthcare organizations and healthcare management need to upgrade and better manage automation and process to support the global demand for efficiencies. 
                </P>
                <P size="sm">
                    By working with us, we will:
                </P>
                <ul className="pl-8 list-disc list-outside mb-6"> 
                    <li>Provide expert assessment on your current IT systems,</li>
                    <li>Recommend optimized systems workflow,</li>
                    <li>Develop the most suitable and cost-efficient systems that will address workflow gaps and resource inefficiencies</li>
                    <li>Provide database management</li>
                </ul>
                <P size="sm" twClass="mb-4">
                    <b>Solving the Security Compliance Challenge</b>
                </P>
                <P size="sm" twClass="mb-4">
                    Now, more than ever, it is critical for hospitals and healthcare systems to have proper cybersecurity measures in place that allow them to quickly identify, respond to and report any intrusions—not only to limit operational disruptions but to protect patients’ health and safety.
                </P>
                <P size="sm" twClass="mb-4">
                    As data security is a growing strategic agenda item for healthcare executives around the world. With our Healthcare Systems Management, we can support compliance across international standards such as HIPAA and Electronic Records Management, which includes the proper use of Personally Identifiable Identification (PII), automating processes and documenting all changes with extensive change management functionalities. 
                </P>
                <P size="sm">
                    You can trust <CompanyNameEmphasized /> to work hand in hand with your teams to ensure your healthcare organization’s data systems are at par with global best practices in terms of technological capabilities and also in the area of data security to ultimately achieve better ROI for the organization and enable better user experiences.  
                </P>
            </>
        )
    },
    {
        index: 2,
        title: 'Website and Mobile Application Development',
        name: 'WebsiteAndMobileApplicationDevelopment',
        description: (
            <>
                <P size="sm" twClass="mb-4">
                    Regardless of size of your business or type of industry it belongs to, a professionally developed website and/or mobile site is non-negotiable. These will drive visibility for your business, promote your brand and establish credibility. There are many online tools that can provide self-build website with templates, but usually packaged or pre-designed website or apps does not allow for easy self-managed customizations. With <CompanyNameEmphasized />, we can work closely with you to design and develop a website or mobile app end-to-end, that meets your design vision and evolving business requirements. 
                </P>
                <P size="sm" twClass="mb-4">
                    Designing and developing a website or mobile application involves having extensive knowledge on User Interface (UI) and User experience (UX). Our creative and development teams will ensure that your website’s and/or mobile application’s UI and UX are based from research and strong analysis of the potential users’ perspective and their expected usage behavior. Customizing it to the user’s needs, we deliver the topnotch UI/UX design services, as an integral part of web/mobile app development process.
                </P>
                <P size="sm">
                    By working with us at <CompanyNameEmphasized />, you can save a lot of resources especially your time and money by allowing professionals to recommend the proper technology and suitable development design. This comes with the ability to access to a content management system and database to allow you to maintain your own website, to keep on adding content to it, and make changes as needed. While more simple tasks can be executed internally, you can additionally leave the more complex tasks to us through a managed website or app maintenance service. 
                </P>
            </>
        )
    },
    {
        index: 3,
        title: 'Application Customization',
        name: 'ApplicationCustomization',
        description: (
            <>
                <P size="sm" twClass="mb-4">
                    Our team members have many years of design and development experience, having worked different types of applications from various industries. With our team’s background and expertise, we can help any business with their web-based or mobile-based application integration and customization needs. Whether on the creative and technical side or both, we can help in customizing, installing and managing applications.
                </P>
                <P size="sm">
                    Numerous open source software solutions are now available that can be customized, depending on business needs. With our app customization service, we will enable you to have: lower start-up and operational cost, an easier or faster way to deploy the needed app, access to feature-rich plugins for adding specific functionalities, continued upgrades and updates as needed. Speak to us about your business and app requirements. Our experts will be happy to guide and recommend what right applications could best be customized for your needs.
                </P>
            </>
        )
    },
    {
        index: 4,
        title: 'Cards and Payment System',
        name: 'CardsAndPaymentSystem',
        description: (
            <>
                <P size="sm" twClass="mb-4">
                    We also provide end-to-end card and payment services to allow our clients’ to effectively respond to market demands by providing their companies the proper payment systems in place. We can help you develop payment technology solutions, link with existing payment gateways, and allow your mobile apps with payment access as well. 
                </P>
                <P size="sm">
                    With cards and payment system in place, your business will establish competitive position in the market, gain greater flexibility and tap into more opportunities.
                </P>
            </>
        )
    },
    {
        index: 5,
        title: 'e-Commerce',
        name: 'eCommerce',
        description: (
            <>
                <P size="sm">
                    Having a well-designed e-commerce platform and applications is the foundation of conducting business online. At <CompanyNameEmphasized />, we can help you enable your online business to have:
                </P>
                <ul className="pl-8 list-disc list-outside mb-4"> 
                    <li>Proper User-Interface and User Experience (UI/UX) Designed Online Storefront</li>
                    <li>Online payment capability </li>
                    <li>Shipping gateways connections</li>
                    <li>Access analysis tools, tracking and reporting methods</li>
                </ul>
                <P size="sm">
                    With our highly experienced creative design and technical teams, you can be confident that you will have an e-commerce platform with responsive design, with the best-suited features and functionality, while remaining completely flexible & customizable over time. By working with us, your customized e-commerce platform will help usher in the highest possible conversion for your business. 
                </P>
            </>
        )
    },
    {
        index: 6,
        title: 'Staff Augmentation',
        name: 'Staff Augmentation',
        description: (
            <>
                <P size="sm" twClass="mb-4">
                    All organizations require team of the right size for its projects to be efficiently achieved. At times, it is inevitable to expand the cross-functional teams to add more people who are specifically suited for certain position. We at <CompanyNameEmphasized /> can provide staff augmentation services to help address your team’s resources needs, significantly improve the pace of your project development or processes, as well as offer the professional expertise that your team needs.
                </P>
                <P size="sm" twClass="mb-4">
                    We can provide the proper skillsets for your company’s team, to bridge the gap between demand and supply in your IT human resource. We aim to deliver staff augmentation solutions that support and improve your technology initiatives while maintaining cost efficiencies.
                </P>
                <P size="sm">
                    IT staff augmentation services allow you to tap IT professionals in the Philippines, including experienced: 
                </P>
                <ul className="pl-8 list-disc list-outside mb-4"> 
                    <li>software developers</li>
                    <li>mobile developers</li>
                    <li>database administrators</li>
                    <li>QA (Quality Assurance) specialists</li>
                    <li>digital transformation consultants and</li>
                    <li>digital marketing specialists & social media managers</li>
                </ul>
                <P size="sm">
                    Talk to us on your needs so we can start pooling the right staff to augment your teams.
                </P>
            </>
        )
    },
    {
        index: 7,
        title: 'Digital Transformation and Strategy',
        name: 'DigitalTransformationAndStrategy',
        description: (
            <>
                <P size="sm" twClass="mb-4">
                    By definition, digital transformation pertains to the act of revolutionizing business processes to take advantage of digital technologies to make business processes and functions more efficient, accessible and scalable. Over the last few years it has become a huge global phenomenon whereby companies have embraced digital transformation. 
                </P>
                <P size="sm">
                    Digital Transformation may encompass several areas of the organization:
                </P>
                <ul className="pl-8 list-disc list-outside mb-4"> 
                    <li>Its business processes – touches on transforming the very nature of business processes. This involves: automation, analytics, data, AI, robotics, and similar technologies that reinvent business processes. To stay competitive, businesses must always review and reinvent its business processes.</li>
                    <li>Use of Technology – transforming the use of digital technology to change the way to do business. Software and hardware both can act as strategic differentiators, propelling growth and innovation.</li>
                    <li>The workplace - To keep up with the times, organizations are realizing how crucial it is to adapt to new cultures, continually train employees, and develop a workplace that is streamlined and digital. </li>
                    <li>Its Business Strategy - organizations are now more open to integrate new prerogatives into their strategies. Some of today’s most important strategic priorities include the customer experience, employee engagement, digital innovation, and agile method.</li>
                </ul>
                <P size="sm" twClass="mb-4">
                    As an IT Firm, we offer Digital Transformation and Strategy services to help your organization leverage on digital technologies to improve your products, improve your business processes internally and externally to positively impact customer experience. 
                </P>
                <P size="sm">
                    In the area of digital transformation, we offer IT services and solutions such as:
                </P>
                <ul className="pl-8 list-disc list-outside mb-4"> 
                    <li>
                        <b>Topnotch IT consultants</b> – to better help your organization make effective IT decisions. We can help guide organizations through the ever-changing digital landscape and make the sound decisions, taking advantage of our IT experts’ extensive experiences in various industries
                    </li>
                    <li>
                        <b>IT department’s modernization</b> – to help your organization upgrade and modernize its IT systems, from software to infrastructure. This can affect many areas of your business, from internal processes to customer-fronting ways.
                    </li>
                    <li>
                        <b>IT Systems Management</b> – we offer IT management as a service. We can assist organizations with applications development, database management, and automation of various functions.
                    </li>
                </ul>
                <P size="sm">
                    Work with us to implement the much-needed digital transformation of your organization. We will help you digitize the elements of your business’s operations where needed, help create the digital culture and introduce your teams to new digital methods & technology and see your business rise to new heights. 
                </P>
            </>
        )
    },
    {
        index: 8,
        title: 'Automation',
        customTitle: 'Automation and RPA (Robotic Process Automation)',
        name: 'Automation',
        description: (
            <>
                <P size="sm" twClass="mb-4">
                    <b>Automation</b>
                </P>
                <P size="sm" twClass="mb-4">
                    An integral part of digital transformation is automating manual processes and repetitive tasks. For instance, if your organization still uses traditional or manual forms to collect information from new clients? Or still using manual ways of encoding data to see purchases from customers. To be digitized, these processes must be automated using intelligent automation. 
                </P>
                <P size="sm" twClass="mb-8">
                    A McKinsey study showed organizations deploying intelligent automation across various industries experienced a 30% to 35% efficiency. Another critical part of enabling digital transformation is improving customer experience. By using intelligent automation to automate repetitive tasks like frequently asked questions or taking orders over the phone or through mobile SMS. Automation can help analyze all relevant customer issues and interactions. This will help by reducing customer response time delays and ultimately boost customer satisfaction.
                </P>

                <P size="sm" twClass="mb-4">
                    <b>Robotic Process Automation</b>
                </P>
                <P size="sm" twClass="mb-4">
                    An RPA software replicates the way a human would interact with an application or system and then automates that task. For many organizations, implementing RPA is one of the first, and often the most straightforward, approaches to automation in the digital transformation journey.
                </P>
                <P size="sm">
                    The finance sector is one of the first industries to use Robotic Process Automation, but nowadays RPA role is increasing more and more across many industries and is benefitting for most if not all industries, including: 
                </P>
                <ul className="pl-8 list-disc list-outside mb-4"> 
                    <li>Retail</li>
                    <li>Construction & Logistcs</li>
                    <li>Telecommunication & Utilities</li>
                    <li>Oil, Gas and Energy</li>
                    <li>Pharmaceutical</li>
                    <li>Automotive, Aviation & Hospitality</li>
                    <li>Food industry</li>
                    <li>Education & Healthcare</li>
                </ul>
                <P size="sm">
                    Looking closely at one industry—in retail for one: we can see how a vast number of tasks can be automated in many areas, such as in areas of:
                </P>
                <ul className="pl-8 list-disc list-outside mb-4"> 
                    <li>store planning,</li>
                    <li>inventory management,</li>
                    <li>product categorization,</li>
                    <li>logistics and supply chain management,</li>
                    <li>business and sales analytics,</li>
                    <li>launching new products,</li>
                    <li>customer support management,</li>
                    <li>consumer behavior analysis,</li>
                    <li>automated customer loyalty programs,</li>
                    <li>Month-end Reporting,</li>
                    <li>payment processing</li>
                </ul>
                <P size="sm" twClass="mb-4">
                    While across any industry, RPA can be developed to enable at the very least the following core areas -- a more efficient <i>inventory management, payroll and timekeeping and customer support</i>.
                </P>
                <P size="sm">
                    Overall, from knowledge sharing to lower costs to higher employee satisfaction, automation and RPA can make a huge difference in the quality and efficiency of any company, and will become more and more a norm in all industries.
                </P>
            </>
        )
    },
    {
        index: 9,
        title: 'Digital Marketing',
        name: 'DigitalMarketing',
        description: (
            <>
                <P size="sm" twClass="mb-4">
                    Apart from developing systems and back-end needs, <CompanyNameEmphasized /> takes pride in offering digital marketing services that are strongly results-driven. Our expert team of digital marketing professionals have worked with various industries from hospitality, FMCG, automotive, health and beauty, healthcare, education, financial industries, etc, to develop digital marketing strategies aimed to increase product awareness, drive conversions and ultimately deliver ROI. 
                </P>
                <P size="sm">
                    Our digital marketing services include:
                </P>
                <ul className="pl-8 list-disc list-outside"> 
                    <li>Search Engine Optimization (SEO),</li> 
                    <li>paid search or Search Engine Marketing (SEM),</li> 
                    <li>social media marketing (Brand pages on Facebook, Instagram, LinkedIn etc.),</li>
                    <li>implementing paid ads or banner ads (such as Facebook Ads, Google Ads, etc) and programmatic buying,</li>
                    <li>digital content development including video campaigns</li>
                    <li>digital acquisition campaigns—especially needed by organizations engaged in e-commerce or selling products & services online.</li>
                </ul>
            </>
        )
    },
    {
        index: 10,
        title: 'Project Outsourcing', 
        name: 'ProjectOutsourcing', 
        description: (
            <>
                <P size="sm">
                    Our team of experienced IT professionals and project managers will closely work with you to address all or partial outsourced project needs. This starts with understanding your business scope, capabilities and needs for us to efficiently recommend what IT projects we can deliver and provide you with. This may include but not limited to:
                </P>
                <ul className="pl-8 list-disc list-outside mb-4"> 
                    <li>Payroll and Timekeeping services</li>
                    <li>Supply Chain</li>
                    <li>Website and mobile applications development</li>
                    <li>E-commerce systems and platform</li>
                    <li>API Management</li>
                </ul>
                <P size="sm">
                    With our end-to-end IT project outsourcing service, we can provide you with the high level IT advice and be an added expertise to complement your own internal departments. With our team’s proven skills and ability to deliver IT projects on time and with an aim to effect as less disruption possible, you can focus on running your operations and better drive your business forward.
                </P>
            </>
        )
    },
    {
        index: 11,
        title: 'Managed Services',
        name: 'ManagedServices',
        description: (
            <>
                <P size="sm" twClass="mb-4">
                    <CompanyNameEmphasized /> is also an MSP or Managed Service Provider such that we can be your partner in being responsible for the operations and/or functionality of a process or equipment within your organization. We can manage this process under a Service Level Agreement (SLA). 
                </P>
                
                <P size="sm" twClass="mb-4">
                    As a Managed Service Provider, we can take on the responsibility for maintaining and anticipating the need for a specific or an extensive scope of your business functions and processes. 
                </P>

                <P size="sm">
                    Managed Services can range from specific to very particular or niche requirement. Some of the most commonly availed services can include:
                </P>

                <ul className="pl-8 list-disc list-outside mb-4"> 
                    <li>monitoring and maintenance of databases</li>
                    <li>systems management</li>
                    <li>remote monitoring and management of servers</li>
                    <li>network monitoring</li>
                    <li>cloud-based managed service</li>
                    <li>business process outsourcing</li>
                </ul>

                <P size="sm">
                    The traditional approach to managed services is a break/fix model which monitors systems until there is a problem to remediate. Many modern managed services providers take a more proactive approach to maintenance and management which can include patch management and predictive maintenance. 
                </P>
            </>
        )
    },
];

const Service = (props) => {
    const { width, height, widthCat } = props;
    const { name } = useParams();
    const navigate = useNavigate();

    const toggleMenuMobile = useGlobalStore((state) => state.toggleMenuMobile);
    const [isWideScreen, setIsWideScreen] = useState(false);
    const [contentType, setContentType] = useState();
    const [service, setService] = useState(null);
    const [previousService, setPreviousService] = useState(null);
    const [nextService, setNextService] = useState(null);

    useEffect(() => {
        reset();
        const _service = find(services, function(o) { return o.name === name; });
        setService(_service);

        if (_service && _service.index === 0) {
            setPreviousService(null);
    
            const _nextService = find(services, function(o) { return o.index === _service.index + 1 });
            if (_nextService) {
                setNextService(_nextService);
            }
        } else if (_service && _service.index === services.length) {
            setNextService(null);
    
            const _previousService = find(services, function(o) { return o.index === _service.index - 1 });
            if (_previousService) {
                setPreviousService(_previousService);
            }
        } else {
            
            const _previousService = find(services, function(o) { return o.index === _service.index - 1 });
            const _nextService = find(services, function(o) { return o.index === _service.index + 1 });
            
            if (_previousService) {
                setPreviousService(_previousService);
            }

            if (_nextService) {
                setNextService(_nextService);
            }
        }
    
    }, [name])
    
    useEffect(() => {
        setContentType(getContentType(width, height));
        setIsWideScreen(_isWideScreen(widthCat));
    }, [width, height]);

    const isMobile = contentType === 'mobile';
    const mainImageRef = useRef();
    // const isInMainImageViewport = useIntersection(mainImageRef, '0px'); // Trigger as soon as the element becomes visible
    const isInMainImageViewport = false;  
    let mainImageSrc = `${process.env.PUBLIC_URL}/images/transforming-your-needs/Desktop_TransformingYourNeeds.jpg`;
    if (isMobile) {
        // to do: mobile image
        mainImageSrc = `${process.env.PUBLIC_URL}/images/transforming-your-needs/Mobile_TransformingYourNeeds.jpg`;
    }

    const reset = () => {
        setPreviousService(null);
        setNextService(null);
    };

    if (service === null) return null;

    return (
        <>
            <Header 
                bgColor={!isInMainImageViewport ? colors.white : 'transparent'} 
                logoColor={!isInMainImageViewport ? colors.violet : colors.white} 
                color={!isInMainImageViewport ? colors.violet : colors.white} 
                showShadow={!isInMainImageViewport} 
                widthCat={widthCat}
                width={width}
                isMobile={isMobile}
                textMenuIcon
                onMenuClick={toggleMenuMobile}
            />
            <div style={{ marginTop: headerConfig.maxHeight }}>
                <img 
                    ref={mainImageRef}
                    src={mainImageSrc}
                    width='100%'
                    height='100%'
                />
            </div>

            <PageSection widthCat={widthCat} centerAlign isMobile={isMobile} noPaddingBottom>
                <div className='flex flex-col items-start' style={{ maxWidth: isWideScreen ? '80%' : '100%', paddingBottom: '24px' }}>
                    <P twClass="mb-4" fontType="bold" header noMargin widthCat={widthCat} size="lg" style={{color: colors.violet, letterSpacing: '2px' }}>
                        {  service.customTitle || service.title }
                    </P>
                    { service.description }
                    <Pagination
                        className="mt-8"
                        onPrevious={() => {
                            navigate(`/service/${previousService.name}`);
                        }}
                        onNext={() => {
                            navigate(`/service/${nextService.name}`);
                        }}
                        previousTitle={previousService !== null && previousService.title}
                        nextTitle={nextService !== null && nextService.title}
                        disablePrevious={previousService === null}
                        disableNext={nextService === null}
                        widthCat={widthCat}
                        width={width}
                        height={height}
                    />
                </div>
            </PageSection>
        </>
    )
}

export default compose(
    memo,
    compose(withWidth(), renameProp('width', 'widthCat')),
    windowDimensions()
  )(Service);  
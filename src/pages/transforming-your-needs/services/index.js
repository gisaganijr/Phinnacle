import React, { forwardRef } from 'react';
import classNames from "classnames";
import { appBgColor, colors, outlinedButton, margin } from 'variables';
import { isMediumAndSmaller } from 'utils/screenWidth';
import PageSection  from 'components/page-section';
import CustomSVG from 'components/custom-svg';
import P from 'components/p';
import { ReactComponent as WeCreate } from 'svg/services/WeCreate.svg';
import { ReactComponent as WeDeploy } from 'svg/services/WeDeploy.svg';
import { ReactComponent as WeOwn } from 'svg/services/WeOwn.svg';
import Item from './Item';

const Services = forwardRef((props, ref) => {
    const { widthCat, width, color, bgColor, titleColor, title, isMobile, children, noPaddingBottom } = props;
    const _isMediumAndSmaller = isMediumAndSmaller(widthCat);
    const services = [
        {
            item: 0,
            title: {
                xs: <span>WE CREATE</span>,
                sm: <span>WE CREATE</span>,
                md: <span>WE CREATE</span>,
                lg: <span>WE CREATE</span>,
                xl: <span>WE CREATE</span>,
            },
            icon: WeCreate,
            iconViewBox: '0 0 280.8 316.8',
            iconWidth: {
                xs: '180px',
                sm: '180px',
                md: '250px',
                lg: '250px',
                xl: '250px',
            },
            color: colors.white,
            bgColor: colors.darkViolet,
            description: (
                <>
                    <P size="sm" twClass="mb-4">
                        At Phinnacle, we recognize the importance of Solutions Architecture as having a crucial role for creating new enterprise solutions. With this service, we ensure that every solution will meet the business requirements and the enterprise setup as a whole. With our solution architecture’s best practices, we help take your business to the next level as we translate technical business needs into practical IT solutions all while establishing rules and instructions for proper delivery. Not only does this service entail finding IT solutions to the enterprise needs, it can also be regarded as additional support system that will provide your organization with needed structure and can help reduce the scope of complexities brought about by digitalization.
                    </P>
                </>
            ),
            services: [
                {
                    index: 0,
                    title: 'Solution Architecture',
                    name: 'SolutionArchitecture',
                },
                {
                    index: 1,
                    title: 'Healthcare Systems',
                    name: 'HealthcareSystems',
                },
                {
                    index: 2,
                    title: 'Website and Mobile Application Development',
                    name: 'WebsiteAndMobileApplicationDevelopment',
                },
                {
                    index: 3,
                    title: 'Application Customization',
                    name: 'ApplicationCustomization',
                },
                {
                    index: 4,
                    title: 'Cards and Payment System',
                    name: 'CardsAndPaymentSystem',
                },
                {
                    index: 5,
                    title: 'e-Commerce',
                    name: 'eCommerce',
                },
            ]
        },
        {
            item: 1,
            title: {
                xs: <span>WE DEPLOY</span>,
                sm: <span>WE DEPLOY</span>,
                md: <span>WE DEPLOY</span>,
                lg: <span>WE DEPLOY</span>,
                xl: <span>WE DEPLOY</span>,
            },
            icon: WeDeploy,
            iconViewBox: '0 0 398 345.8',
            iconWidth: {
                xs: '200px',
                sm: '200px',
                md: '300px',
                lg: '310px',
                xl: '310px',
            },
            color: colors.white,
            bgColor: colors.violet,
            description: (
                <>
                    <P size="sm" twClass="mb-4">
                        We also provide end-to-end cards and payment services to allow our clients’ to effectively respond to market demands by providing their companies the proper payment systems in place. We can help you develop payment technology solutions, link with existing payment gateways, and allow for mobile payments if needed. 
                    </P>
                    <P size="sm" twClass="mb-4">
                    It will give your business greater flexibility and tap into more opportunities, establish competitive position in the market.
                    </P>
                </>
            ),
            services: [
                {
                    index: 0,
                    title: 'Staff Augmentation',
                    name: 'Staff Augmentation',
                },
                {
                    index: 1,
                    title: 'Digital Transformation and Strategy',
                    name: 'DigitalTransformationAndStrategy',
                },
                {
                    index: 2,
                    title: 'Automation',
                    name: 'Automation',
                },
                {
                    index: 3,
                    title: 'Digital Marketing',
                    name: 'DigitalMarketing',
                }
            ]
        },
        
        {
            item: 2,
            title: {
                xs: <span>WE OWN</span>,
                sm: <span>WE OWN</span>,
                md: <span>WE OWN</span>,
                lg: <span>WE OWN</span>,
                xl: <span>WE OWN</span>,
            },
            icon: WeOwn,
            iconViewBox: '0 0 388.6 240.8',
            iconWidth: {
                xs: '220px',
                sm: '220px',
                md: '320px',
                lg: '330px',
                xl: '330px',
            },
            color: colors.white,
            bgColor: colors.darkViolet,
            description: (
                <>
                    <P size="sm" twClass="mb-4">
                        In this day and age, especially in this post pandemic era, the healthcare industry is in enormous pressure and limelight and is expected to create excellent services to improve patient care. IT has come into play and had become key part in the healthcare setting. 
                        Phinnacle IT allows healthcare organizations and individuals to upgrade and better manage automation and process to support the growing demand for efficiencies. We can develop custom or readily-available platforms equipped to meet compliance challenges, manage database and deliver systems to improve user experiences within the healthcare landscape.
                    </P>
                </>
            ),
            services: [
                {
                    index: 0,
                    title: 'Project Outsourcing', 
                    name: 'ProjectOutsourcing', 
                },
                {
                    index: 1,
                    title: 'Managed Services',
                    name: 'ManagedServices',
                },
                
                
            ]
        },
    ];

    return (
        <div class="mt-8" style={{ backgroundColor: colors.lightGray }}>
            {
                services.map((service) => (
                    <Item {...service} widthCat={widthCat} width={width}>
                        { service.description }
                    </Item>
                ))
            }
        </div>
    )
})

export default Services;
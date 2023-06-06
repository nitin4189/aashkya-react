import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import recruitment from '../assets/images/recruitment.png';

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Think Workforce, Think Aashkya
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Progress Through Trusted and Professional Services
              </Typography>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              <Button variant="outlined">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-20">
        <div className="container mx-auto">
          <PageTitle heading="Our Vision">
            Services and solutions related to workers in India. We aspire to be a centre of excellence, pioneering and applying the best practices in the industry within the boundary of law. We are also committed to build successful partnerships and be acknowledged by the Government, the industry and all our clients.
          </PageTitle>
        </div>
        <div className="container mx-auto mt-4">
          <div className="mx-auto w-full px-4 text-center">
            <Typography variant="h4" color="blue-gray" className="mb-3">
              Our Mission
            </Typography>
            <Typography variant="h6" className="text-blue-gray-500">
              <p>1. We are dedicated to delivering cutting-edge and adaptable solutions that go beyond our clients' expectations</p>
              <p>2. Our primary objective is to streamline the identification and resolution of issues, significantly reducing the time it takes to reach a resolution</p>
              <p>3. By offering services that generate substantial value, we empower our clients to enhance their businesses</p>          
            </Typography>
          </div>
          {/* <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div> */}
        </div>
      </section>
      <section className="relative py-24 px-4 bg-blue-gray-50/50">
        <div >
          <PageTitle heading="Why choose us?" />
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-2">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          {/* <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form> */}
        </div>
      </section>
      <section className="py-20 text-center">
        <div className="flex justify-center items-center flex-col">
          <PageTitle heading="Recruitment Process" />
          <div className="w-full flex justify-center pt-5">
            <img src={recruitment} className="w-full max-w-lg" />
          </div>  
        </div>
      </section>
      <section className="py-20 bg-blue-gray-50/50">
        <div className="container mx-auto">
          <PageTitle heading="About Us">
            <div className="text-left">
              Aashkya Group, founded in 2018, is a startup that specializes in providing worker solutions in India. It prides itself on being one of the few comprehensive providers in the industry, offering a "one-stop" avenue for the supply of workers.<br/><br/>
              The company's core businesses revolve around workers or manpower management services, manual labor services, and worker insurance products and services. Aashkya Group distinguishes itself from competitors through several competitive strengths. Firstly, it has established working relationships with partners, which likely contributes to its ability to fulfill labor requirements effectively. Additionally, the company boasts an experienced key management team that brings valuable expertise to its operations. Lastly, Aashkya Group leverages information technology in its business processes, which likely enhances efficiency and effectiveness.<br/><br/>
              Aashkya Group is dedicated to catering to the labor needs of various industries in India. Its customer base includes electrical and electronic manufacturers, shopping centers, food and beverage service providers, as well as hospitality and convenience stores. However, the company has ambitions to expand further. It plans to venture into the manufacturing and services sectors, indicating a desire to diversify its offerings and potentially reach new markets. Additionally, Aashkya Group aims to serve Government Institutes & Departments, further expanding its client base.<br/><br/>
              Corporate Identification Number: U74999MP2018OPC045317<br/>
              PAN: AAQCA6609L<br/>
              GST: 23AAQCA6609L1ZC<br/>
              Startup India: DIPP117117<br/>
              MAME: UDYAM-MP-10-0046509<br/>
            </div>  
          </PageTitle>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 lg:grid-cols-3">
            <div>
              <Typography variant="h4" className="mb-2" color="blue-gray">
                Address
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                H.No. 17 Purvasha Nagar, Hoshnagabad Road, Bhopal 462026, Madhya Pradesh
              </Typography>
            </div>
            <div>
              <Typography variant="h4" className="mb-2" color="blue-gray">
                Email
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                aashkyasolutions@gmail.com
              </Typography>
            </div>
            <div>
              <Typography variant="h4" className="mb-2" color="blue-gray">
                Contacts
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                0755-4953108, 9926247777 / 9926147777
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;

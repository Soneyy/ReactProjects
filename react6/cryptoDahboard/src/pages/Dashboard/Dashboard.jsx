import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import { GridItem, Grid } from "@chakra-ui/react";
import Transactions from "./components/Transcations";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          ms: "repeat(2,1fr)",
        }}
        gap="6"
      >
        <GridItem colSpan={2}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
          tagText="Loans"
            imgUrl="./shape.png"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
          tagText="Contact"
            imgUrl="./Visual.png"
            text="Learn more about our real estate, mortgage, and  corporate account services"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;

'use client';

import React from 'react';
import PageLayout from '@/app/layout/PageLayout';
import { Typography, Container, Box, Stack, Grid } from '@mui/material';
import Image from 'next/image';

const About = () => {
  return (
    <PageLayout>
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography>OUR STORY</Typography>
        <Grid container flexDirection="row" mt={4} mb={10}>
          <Grid item xs>
            <Image
              src={'/assets/marble-shop.jpg'}
              alt="marble shop"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: 'inherit', height: 'inherit' }}
            />
          </Grid>
          <Grid item xs>
            <Typography sx={{ alignItems: 'center' }}>
              In the heart of our family, the legacy of crafting exquisite
              pieces from marble had its humble beginnings with my grandfather.
              He was a craftsman with a deep connection to the art of carving,
              and he would spend hours transforming small blocks of marble into
              intricate figurines that held a certain charm.
              <br />
              <br />
              My father, inspired by his own father's passion, decided to build
              on this artistic foundation and elevate it to a family business.
              Under his skilled hands, the focus shifted from small figurines to
              larger, more functional pieces. The belief that marble could be
              both classy and functional became our guiding principle.
              <br />
              <br />
              The transition from generation to generation marked a journey of
              evolution. My father explored the versatility of marble,
              discovering that it wasn't just a medium for artistry but could
              also serve practical purposes. He envisioned a range of home decor
              items that not only exuded class but also served a purpose in
              daily life.
              <br />
              <br />
              With this vision, our family business was born. The small workshop
              that once echoed with the sound of my grandfather's chisel
              expanded into a collaborative space where my father and a team of
              skilled artisans transformed raw marble into functional
              masterpieces. From sleek kitchenware to stylish storage solutions,
              each piece told the story of our family's commitment to blending
              elegance with utility.
              <br />
              <br />
              As the business flourished, it became a testament to the enduring
              value of tradition and craftsmanship. Our family's dedication to
              creating marble pieces that were not just beautiful but also
              served a purpose resonated with a growing audience. It was more
              than a business; it was a shared passion for turning a solid block
              of stone into something that could adorn homes and enrich daily
              life.
              <br />
              <br />
              Now, as I carry the torch forward, I am proud to continue the
              legacy of my grandfather and father. Our family's journey from
              small figurines to a thriving business is a story of innovation,
              dedication, and the belief that marble, with its timeless appeal,
              can seamlessly blend class with functionality. Each piece we
              create is a nod to our heritage, a tribute to the idea that from
              stone, we can fashion something enduring, sophisticated, and
              purposeful.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  );
};

export default About;

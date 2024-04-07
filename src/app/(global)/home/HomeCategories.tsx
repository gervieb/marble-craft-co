import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import ButtonComponent from "@/app/components/ButtonComponent";
import { supabase } from "@/utils.ts/supabase";

const HomeCategories = () => {
  const [categories, setCategories] = useState<
    { id: number; name: string; url: string }[] | null
  >(null);

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    const { data } = await supabase.from("categories").select();
    setCategories(data);
  }

  console.log({ categories });

  return (
    <Box>
      <Grid
        container
        spacing={5}
        mt={2}
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {categories?.map((product) => (
          <Grid item key={product.id} sx={{ width: "280px", mt: 2 }} xs={3}>
            <Image
              src={product.url}
              alt="christmas marble product"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                width: "100%",
                height: "180px",
              }}
            />
            <ButtonComponent title={product.name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeCategories;

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const AboutCard = ({ title, description, image }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={image} // 使用传入的图片链接
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title} {/* 使用传入的标题 */}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description} {/* 使用传入的描述 */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AboutCard;

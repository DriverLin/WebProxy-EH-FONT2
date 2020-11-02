import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export default function GallaryCard(props) {

    const height = 274;
    const width = "100%";
    const colormap = {
        "Manga": "#FF9700",
        "Doujinshi": "#F44236",
        "Non-H": "#9C28B1",
        "Cosplay": "#9C28B1",
        "Image Set": "#3F51B5",
        "Western": "#8BC24A",
        "Game CG": "#4CB050",
        "MISC": "#F06292"
    };
    const languageMap = {
        "chinese": "ZH",
        "english": "EH"
    }

    const useStyles = makeStyles((theme) => ({
        card: {
            width: width,
            height: height,
            display: "flex",
            backgroundColor: "#191919",
            color: "#DDDDDD",
            borderRadius: "2px",
            overflow: "hidden",
            boxSizing: "border-box",
            fontSize: "24px"
        },
        imgContainer: {
            height: height,
            width: height / 1.39,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        imgContainer_img: {
            maxHeight: height,
            maxWidth: height / 1.39,
        },
        infoContainer: {
            width: "100%"
        },
        name_container: {
            height: "45px",
            padding: "5px",
            textAlign: "left"
        },
        name_text: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
        },
        infos: {
            height: "210px",
            position: "relative"
        },
        rank: {
            position: "absolute",
            left: "10px",
            bottom: "52px",
            background: "url(http://192.168.137.1:7964/rt.png)",
            width: "80px",
            height: "16px",
            backgroundPosition: props.data.rank,
            opacity: "1"
        },
        category: {
            position: "absolute",
            left: "10px",
            bottom: "10px",
            padding: "2px 8px",
            backgroundColor: colormap[props.data.category],
        },
        upload_time: {
            position: "absolute",
            right: "10px",
            bottom: "10px",
            marginRight: "10px",
        },
        details: {
            position: "absolute",
            right: "10px",
            bottom: "30px",
            display: "flex",
        },
        d_icon: {
            margin: "10px 10px"
        },
        d_icon_img: {
            width: "26px",
            height: "26px"
        }
    }));
    useEffect(() => {
    }, [])
    const classes = useStyles();

    const initialState = {
        mouseX: null,
        mouseY: null,
    };


    return (
        <ButtonBase
            className={classes.card}
            onClick={(e) => {
                console.log("点击")
            }}
            onContextMenu={(e) => {
                console.log("长按/右键")
            }}
        >
            <div className={classes.imgContainer}>
                <img className={classes.imgContainer_img} src={props.data.imgSrc} />
            </div>
            <div className={classes.infoContainer}>
                <div className={classes.name_container}>
                    <div className={classes.name_text}>
                        <a>{props.data.name}</a>
                    </div>
                </div>
                <div className={classes.infos}>

                    <div className={classes.rank}></div>
                    <div className={classes.category}>
                        <a>{props.data.category.toUpperCase()}</a>
                    </div>
                    <div className={classes.upload_time}>{props.data.uploadtime}</div>
                    <div className={classes.details}>
                        {
                            props.data.downloaded ?
                                <div className={classes.d_icon}>
                                    <img className={classes.d_icon_img} src="http://192.168.137.1:7964/download.png" />
                                </div>
                                : null
                        }
                        {
                            props.data.favo ?
                                <div className={classes.d_icon}>
                                    <img className={classes.d_icon_img} src="http://192.168.137.1:7964/favorite.png" />
                                </div>
                                : null
                        }
                        {
                            props.data.lang in languageMap ?
                                <div className={classes.d_icon}>{languageMap[props.data.lang]}</div> : null
                        }
                        <div className={classes.d_icon}>{props.data.pages + "P"}</div>
                    </div>
                </div>
            </div>
        </ButtonBase>
    )

}
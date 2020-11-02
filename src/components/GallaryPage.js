import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function GallaryPage(props_tmp) {
    const props = {
        data: {
            "gid": 1544752,
            "token": "95e8960fa3",
            "archiver_key": "445526--c9c626603ab373a618e2a14f369feba1fbdf7433",
            "title": "[Michiking] Bitch Slump Azato-san (COMIC Kairakuten 2020-01) [Chinese] [\u7121\u90aa\u6c17\u6f22\u5316\u7d44] [Digital]",
            "title_jpn": "[\u307f\u3061\u304d\u3093\u3050] \u30d3\u30c3\u30c1\u30b9\u30e9\u30f3\u30d7\u5b89\u91cc\u3055\u3093 (COMIC \u5feb\u697d\u5929 2020\u5e741\u6708\u53f7) [\u4e2d\u56fd\u7ffb\u8a33] [DL\u7248]",
            "category": "Manga",
            "thumb": "https://exhentai.org/t/2f/58/2f58885d034644ddd4b05aeb5d4626fe6720a32d-1193405-1360-1920-png_l.jpg",
            "uploader": "\u771f\u5be6\u723d\u7c89",
            "posted": "1577905581",
            "filecount": "17",
            "filesize": 19870713,
            "expunged": false,
            "rating": "4.89",
            "torrentcount": "1",
            "torrents": [{ "hash": "1c207c408b5592aad4cd5b4beeb14c92e0501fad", "added": "1577905819", "name": "[Michiking] Bitch Slump Azato-san (COMIC Kairakuten 2020-01) [Chinese] [\u7121\u90aa\u6c17\u6f22\u5316\u7d44] [Digital].zip", "tsize": "24591", "fsize": "19823071" }],
            "tags":
                [
                    "language:chinese",
                    "language:translated",
                    "artist:michiking",
                    "male:sole male",
                    "female:beauty mark",
                    "female:big breasts",
                    "female:nakadashi",
                    "female:ponytail",
                    "female:sole female",
                    "forbidden content"
                ]
        }
    }

    var tag = new Set()
    props.data.tags.forEach(tagStr => {
        if (tagStr.split(":").length == 2) {
            tag.add(tagStr.split(":")[0])
        } else {
            tag.add("misc")
        }
    })
    console.log(tag)

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


    const width = "800px"
    const img_height = 274
    const useStyles = makeStyles((theme) => ({
        fatherContainer: {
            width: "100%",
        },
        mainContainer: {
            width: width,
            margin: "0 auto",
            border: "1px solid #d90051"
        },
        header: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            border: "1px solid #FF5252"
        },
        headText: {
            margin: "5px 5px",
            display: "flex",
            flexDirection: "column",
            float: "left",
        },
        imgContainer: {
            margin: "5px 5px",
            height: img_height,
            width: img_height / 1.39,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        imgContainer_img: {
            maxHeight: img_height,
            maxWidth: img_height / 1.39
        },
        name: {
            margin: "5px 5px"
        },
        uploader: {
            margin: "10px 5px"
        },
        category: {
            margin: "10px 5px",
            backgroundColor: colormap[props.data.category],
            overflow: "auto",
            width: "fit-content",
            padding: "2px 8px",
        },
        control: {
            margin: "5px 5px",
            width: "auto",
            border: "1px solid #7B1FA2",
            justifyContent: "center",
        },
        control_buttons: {
            width: "50%",
        },
        infos: {
            justifyContent: "center",
        },
        lang_page_size: {
            display: "flex",
            flexDirection: "row"
        },
        // lps_son: {
        //     flex: 1,

        // },
        // infos_lang: {
        //     float: "left"
        // },
        // infos_page: {

        // },
        // infos_size: {
        //     float: "right"
        // },
        // favo_time: {
        //     display: "flex",
        // },
        // favo: {
        //     flex: 1,
        // },
        // uploadtime: {
        //     flex: 1,
        // }
        // filecount: {
        //     width: "50%",
        //     alignItems: "center",
        // }
    }));
    useEffect(() => {
    }, [])
    const classes = useStyles();

    return (
        <div className={classes.fatherContainer}>
            <div className={classes.mainContainer}>
                <div className={classes.header}>
                    <div className={classes.imgContainer}>
                        <img className={classes.imgContainer_img} src={props.data.thumb.replace("exhentai.org/t", "ehgt.org").replace("e-hentai.org/t", "ehgt.org")} />
                    </div>
                    <div className={classes.headText}>
                        <div className={classes.name}>
                            <a>{props.data.title_jpn == "" ? props.data.title_jpn : props.data.title}</a>
                        </div>
                        <div className={classes.uploader}>
                            <a>{props.data.uploader}</a>
                        </div>
                        <div className={classes.category}>
                            <a>{props.data.category}</a>
                        </div>
                    </div>

                </div>
                <div className={classes.control}>
                    <Button className={classes.control_buttons} variant="contained" color="primary">
                        下载
                    </Button>
                    <Button className={classes.control_buttons} variant="contained" color="secondary">
                        阅读
                    </Button>
                </div>
                <div className={classes.infos}>
                    {/* <div className={classes.lang_page_size}> */}
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                    >
                        <div className={classes.lps_son} >
                            <a className={classes.infos_lang}>{props.data.tags[0].split("language:")}</a>
                        </div >
                        <div className={classes.filecount}>
                            <a className={classes.infos_page}>{props.data.filecount}P</a>
                        </div>
                        <div className={classes.lps_son}>
                            <a className={classes.infos_size}>{parseInt(props.data.filesize / 1024 / 1024)}</a>
                        </div>
                    </Grid>
                    {/* </div> */}
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                    >
                        <div className={classes.favo}>
                            <a>{"❤114"}</a>
                        </div>
                        <div className={classes.uploadtime}>
                            <a>{"2020-11-27 03:00"}</a>
                        </div>
                    </Grid>
                    <div className={classes.more_info}>
                        <a>更多信息</a>
                    </div>
                </div>
                <div className={classes.rank}>
                    <div className={classes.starts}>
                        {"☆☆☆☆☆"}
                    </div>
                    <div className={classes.rankNum}>
                        <a>好极了(1.51,86)</a>
                    </div>
                </div>
                <div className={classes.tags}>
                    {
                        Array.from(tag).map((type) => {
                            return (
                                <div>
                                    <div>{type}</div>
                                    {
                                        props.data.tags.map(tagStr => {
                                            if (tagStr.split(":")[0] == type) {
                                                return (<div>{tagStr.split(":")[1]}</div>)
                                            }
                                            if (tagStr.split(":").length == 1) {
                                                return (<div>{tagStr}</div>)
                                            }
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className={classes.comments}>
                    {
                        ["评论1", "评论2"].map(comment => {
                            return <a >{comment}</a>
                        })
                    }
                </div>
                <div className={classes.preview}>
                    {
                        ["https://ehgt.org/2f/58/2f58885d034644ddd4b05aeb5d4626fe6720a32d-1193405-1360-1920-png_l.jpg"].map(img => {
                            return <div><img src={img} /></div>
                        })
                    }
                    <div>
                        <a>显示所有预览</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

import React, { Component, useState, useEffect } from 'react';
import GallaryCard from './GallaryCard'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListenScroll from './ListenScroll'
import LinearProgress from '@material-ui/core/LinearProgress';



export default function MainPage() {
    const [list, setList] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const addData = (dataList) => {
        dataList.forEach(item => list.push(item))
        setList(list)
        setCurrentPage(currentPage + 1)
    }


    const nextPage = () => {
        setLoading(true)
        if (loading == false) {
            fetch("/main/?f_search=artist%3Ayoshiragi%24&page=" + currentPage)
                .then(response => response.json())
                .then(data => {
                    setLoading(false)
                    addData(data)
                })
        }
    }


    useEffect(() => {
        document.oncontextmenu = function (e) {/*屏蔽浏览器默认右键事件*/
            e = e || window.event;
            return false;
        };
        nextPage()
    }, [])
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            margin: theme.spacing(6)
        },
        mainContainer: {
            backgroundColor: "black"
        }
    }));
    const classes = useStyles();
    const [value, setValue] = useState(0);
    return (
        <div className={classes.mainContainer}>
            <ListenScroll num={10} scrollCallback={nextPage} />
            <div className={classes.root}>
                <Grid container spacing={6}>
                    {
                        list.map((row => {
                            return (
                                <Grid key={list.indexOf(row)} item lg={6} xs={12}>
                                    <Paper className={classes.paper}>
                                        <GallaryCard data={row} />
                                    </Paper>
                                </Grid>)
                        }))
                    }
                </Grid>
            </div>
            {
                loading ?
                    <LinearProgress color="secondary" />
                    : null
            }
        </div>
    )
}
# NodeJS Clustering Comparison

Test two nodejs app: One with no clustering and the other with clustering.
Since test machine only have 2 cpus, only two fork of the app will occur when running with clustering.

## Without Clustering
$node no_cluster.js
Server is listening on port 8080

Results:
```
Transactions:               4555 hits
Availability:             100.00 %
Elapsed time:              19.35 secs
Data transferred:           0.07 MB
Response time:              0.36 secs
Transaction rate:         235.40 trans/sec
Throughput:             0.00 MB/sec
Concurrency:               85.26
Successful transactions:        4555
Failed transactions:               0
Longest transaction:            1.53
Shortest transaction:           0.13
```

## With Clustering
$node cluster.js
Forking 2 CPUs
Server is listening on port 8080
Server is listening on port 8080

Results:
```
Transactions:               5202 hits
Availability:             100.00 %
Elapsed time:              19.69 secs
Data transferred:           0.07 MB
Response time:              0.27 secs
Transaction rate:         264.20 trans/sec
Throughput:             0.00 MB/sec
Concurrency:               71.84
Successful transactions:        5202
Failed transactions:               0
Longest transaction:            0.90
Shortest transaction:           0.03
```

## Summary
Clustering has better transactions hits, response time and transaction rate. 


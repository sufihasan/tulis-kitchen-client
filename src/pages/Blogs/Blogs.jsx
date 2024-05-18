

const Blogs = () => {
    return (
        <div>
            <h2 className="text-5xl border-4 p-3 text-center">Blogs</h2>

            <div className="card card-compact w-full my-6 bg-base-100 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title">What is JWT, and how does it work?</h2>
                    <p className="text-xl"><strong>JWT (JSON Web Token):</strong></p>
                    <ul>
                        <li><strong>Definition:</strong> JWT is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object.</li>
                        <li><strong>Structure:</strong> A JWT consists of three parts: Header, Payload, and Signature. It is typically represented as `xxxxx.yyyyy.zzzzz`.</li>
                    </ul>
                    <p className="text-xl"><strong>How It Works:</strong></p>
                    <ul>
                        <li><strong>Header:</strong> Contains the type of token (JWT) and the signing algorithm (e.g., HMAC SHA256 or RSA).</li>
                        <li><strong>Payload:</strong> Contains the claims, which are statements about an entity (typically the user) and additional data. There are three types of claims: registered, public, and private claims.</li>
                        <li><strong>Signature:</strong> To create the signature, you take the encoded header, the encoded payload, a secret, and the algorithm specified in the header, and sign that.
                            <pre>HMACSHA256(
                                base64UrlEncode(header) + "." +
                                base64UrlEncode(payload),
                                secret
                                )</pre></li>
                        <li><strong>Transmission:</strong> The JWT is sent to the client, usually in an HTTP header or a cookie.</li>
                        <li><strong>Verification:</strong> When the client sends the JWT back to the server, the server verifies the signature using the secret or public key to ensure the token has not been tampered with.</li>
                    </ul>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
            <div className="card card-compact w-full my-6 bg-base-100 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title">Difference between SQL and NoSQL?</h2>
                    <p className="text-xl">SQL (Structured Query Language):</p>
                    <div>
                        <li><strong>Database Type:</strong> Relational Database Management Systems (RDBMS)</li>
                        <li><strong>Structure:</strong> Data is stored in tables with rows and columns. Each table has a predefined schema.</li>
                        <li><strong>Schema:</strong> Strict schema with fixed table structure, data types, and relationships.</li>
                        <li><strong>Query Language:</strong> SQL is used for defining and manipulating data.</li>
                        <li><strong>Examples:</strong> MySQL, PostgreSQL, Oracle, SQL Server</li>
                        <li><strong>Use Case:</strong> Suitable for complex queries, transactional applications, and applications where data integrity and consistency are critical.</li>

                    </div>
                    <p>NoSQL (Not Only SQL):</p>
                    <div>
                        <li><strong>Database Type:</strong> Non-relational or distributed database systems</li>
                        <li><strong>Structure:</strong> Data can be stored in various formats, including document, key-value, graph, or column-family stores.</li>
                        <li><strong>Schema:</strong> Dynamic schema for unstructured data, allowing flexibility in data representation.</li>
                        <li><strong>Query Language:</strong> Various query languages depending on the type of NoSQL database (e.g., MongoDB uses a JSON-like query language).</li>
                        <li><strong>Examples:</strong> MongoDB, Cassandra, Redis, Neo4j</li>
                        <li><strong>Use Case:</strong> Suitable for big data applications, real-time web apps, and scenarios where scalability and fast access to large amounts of unstructured data are required.</li>

                    </div>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
            <div className="card card-compact w-full my-6 bg-base-100 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                    <p className="text-xl"><strong>JavaScript:</strong></p>
                    <ul>
                        <li><strong>Definition:</strong> JavaScript is a programming language that is primarily used for client-side scripting on web pages. It can run in any web browser.</li>
                        <li><strong>Environment:</strong> Runs in the browser environment (e.g., Chrome's V8 engine, Firefox's SpiderMonkey).</li>
                        <li><strong>Usage:</strong> Used for front-end development to create interactive web pages, manipulate the DOM, handle events, etc.</li>
                    </ul>
                    <p className="text-xl"><strong>NodeJS:</strong></p>
                    <ul>
                        <li><strong>Definition:</strong> Node.js is a runtime environment that allows JavaScript to be executed on the server side. It is built on Chrome's V8 JavaScript engine.</li>
                        <li><strong>Environment:</strong> Runs on the server, outside of the browser.</li>
                        <li><strong>Usage:</strong> Used for back-end development, allowing the creation of server-side applications with JavaScript. It is suitable for building scalable network applications, APIs, and real-time services.</li>
                    </ul>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
            <div className="card card-compact w-full my-6 bg-base-100 shadow-xl">

                <div className="card-body">
                    <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                    <p className="text-xl"><strong>Event-Driven Architecture:</strong></p>
                    <ul>
                        <li>Node.js uses an event-driven, non-blocking I/O model.</li>
                        <li>It employs an event loop that continuously checks for and processes events (such as I/O operations).</li>
                    </ul>
                    <p className="text-xl"><strong>Asynchronous Processing:</strong></p>
                    <ul>
                        <li>Instead of waiting for an I/O operation to complete (blocking), Node.js uses callbacks, promises, and async/await to handle operations asynchronously.</li>
                        <li>When an I/O operation (like reading a file or querying a database) is requested, Node.js delegates the operation to the system kernel or another background process.</li>
                        <li>Once the operation completes, a callback function is executed, or a promise is resolved/rejected.</li>
                    </ul>
                    <p className="text-xl"><strong>Single-Threaded Nature:</strong></p>
                    <ul>
                        <li>Node.js runs on a single thread but can handle thousands of concurrent connections by offloading I/O operations and using the event loop efficiently.</li>
                        <li>The single thread handles multiple requests by processing each request's callback as soon as the I/O operation completes, allowing other operations to continue in the meantime.</li>
                    </ul>
                    <p className="text-xl"><strong>Worker Threads:</strong></p>
                    <ul>
                        <li>For CPU-intensive tasks, Node.js can utilize worker threads to offload heavy computations, thus preventing the event loop from being blocked.</li>
                    </ul>

                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;
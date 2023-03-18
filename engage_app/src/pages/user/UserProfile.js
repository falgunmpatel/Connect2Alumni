import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { toast } from "react-hot-toast";

const REACT_APP_API = "http://localhost:8080";

const UserProfile = () => {
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const {
      name,
      email,
      password,
      phone,
      photo,
      firstname,
      lastname,
      course,
      course_specialization,
      year_of_study,
      graduation_year,
      skills,
      company,
      projects,
      summary,
    } = auth?.user ?? {};
    setName(name);
    setEmail(email);
    setPassword(password);
    setPhone(phone);
    setPhoto(photo);
    setFirstname(firstname);
    setLastname(lastname);
    setCourse(course);
    setCourse_Specialization(course_specialization);
    setYear_Of_Study(year_of_study);
    setGraduation_Year(graduation_year);
    setSkills(skills);
    setCompany(company);
    setProjects(projects);
    setSummary(summary);
  }, [auth?.user]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [course, setCourse] = useState("");
  const [course_specialization, setCourse_Specialization] = useState("");
  const [year_of_study, setYear_Of_Study] = useState("");
  const [graduation_year, setGraduation_Year] = useState("");
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState("");
  const [company, setCompany] = useState("");
  const [summary, setSummary] = useState("");

  //profile function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${REACT_APP_API}/api/v1/auth/userprofile`,
        {
          name,
          email,
          // password,
          firstname,
          lastname,
          phone,
          course,
          course_specialization,
          year_of_study,
          graduation_year,
          skills,
          projects,
          company,
          summary,
        }
      );

      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container rounded bg-white mt-5 mb-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <div className="mb-3">
                  {photo && (
                    <div className="text-center">
                      <div
                        style={{
                          overflow: "hidden",
                          width: "180px",
                          height: "180px",
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          src={URL.createObjectURL(photo)}
                          alt="product_photo"
                          className="img img-responsive"
                          style={{
                            position: "relative",
                            top: "-20%",
                            height: "auto",
                            maxWidth: "100%",
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <div className="mb-3 mt-3">
                    <label className="btn btn-outline-secondary col-md-12">
                      {"Upload Photo"}
                      <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        hidden
                      />
                    </label>
                  </div>
                </div>
                <span className="font-weight-bold">{auth?.user?.name}</span>
                <span className="text-black-50">{auth?.user?.email}</span>
                <span className="text-black-50">
                  {!auth.user?.access ? <>Student</> : <>Alumni</>}
                </span>
                <span> </span>
              </div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">First Name</label>
                    <input
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Last Name</label>
                    <input
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Surname"
                      required
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="enter phone number"
                      required
                    />
                  </div>
                  {!auth.user?.access ? (
                    <>
                      <div className="col-md-12">
                        <label className="labels">Course</label>
                        <input
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Postcode"
                          required
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  <div className="col-md-12">
                    <label className="labels">Course Specialization</label>
                    <input
                      value={course_specialization}
                      onChange={(e) => setCourse_Specialization(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="State"
                      required
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  {!auth.user?.access ? (
                    <>
                      <div className="col-md-6">
                        <label className="labels">Year of Study</label>
                        <input
                          value={year_of_study}
                          onChange={(e) => setYear_Of_Study(e.target.value)}
                          type="text"
                          className="form-control"
                          placeholder="Country"
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  <div className="col-md-6">
                    <label className="labels">Graduation Year</label>
                    <input
                      value={graduation_year}
                      onChange={(e) => setGraduation_Year(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Graduation Year"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <label className="labels">Summary</label>
                  <textarea
                    rows={5}
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Summary"
                    required
                  ></textarea>
                </div>
                {!auth.user?.access ? (
                  <></>
                ) : (
                  <>
                    <div className="col-md-12">
                      <label className="labels">Company</label>
                      <input
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Summary"
                        required
                      ></input>
                    </div>
                  </>
                )}

                <div className="col-md-12">
                  <label className="labels">Projects</label>
                  <textarea
                    rows={5}
                    value={projects}
                    onChange={(e) => setProjects(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Projects"
                    required
                  ></textarea>
                </div>

                {/* <div className="col-md-12">
                  <label className="labels">Skills</label>
                  <input
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="State"
                    required
                  />
                </div> */}

                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="submit"
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus" />&nbsp;Experience</span></div><br />
              <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" /></div> <br/>
              <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" /></div>
            </div>
          </div> */}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default UserProfile;

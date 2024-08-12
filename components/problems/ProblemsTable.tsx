import React from "react";
import { problems } from "@/mockProblems/problems";
import { BsCheckCircle } from "react-icons/bs";
import Link from "next/link";
import { AiFillYoutube } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

type ProblemsTableProps = {};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
  return (
    <tbody className="text-white">
      {problems.map((doc, idx) => {
        const difficultyColor =
          doc.difficulty === "Easy"
            ? "text-dark-green-s"
            : doc.difficulty === "Medium"
            ? "text-dark-yellow"
            : "text-dark-pink";
        return (
          <tr
            className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`}
            key={doc.id}
          >
            <td className="px-6 py-4">
              <Link
                className="hover:text-blue-600 cursor-pointer "
                href={doc.link}
              >
                {doc.title}
              </Link>
            </td>
            <td className={`px-6 py-4 ${difficultyColor} `}>
              {doc.difficulty}
            </td>
            <td className="px-6 py-4">{doc.category}</td>
            <td className="px-6 py-4">
              {doc.videoId ? (
                <Link
                  className="hover:text-red-600 cursor-pointer "
                  href={doc.link}
                >
                  <FaGithub fontSize={"28"} />
                  {/* <AiFillYoutube
                    fontSize={"28"}
                    className="cursor-pointer hover:text-red-600"
                  /> */}
                </Link>
              ) : (
                <p className="text-gray-400">Coming Soon</p>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default ProblemsTable;
